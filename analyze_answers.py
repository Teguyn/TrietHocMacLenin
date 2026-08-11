import sys, io, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('DanhSachCauHoi.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's clean up line 120 Giá trị khoa học to 120. Giá trị khoa học
text = re.sub(r'(\n\s*120)\s+(Giá trị)', r'\1. \2', text)

lines = [l.strip() for l in text.split('\n') if l.strip()]

chapters = []
current_chapter = 'Bài 1: Triết Học và triết học mác lênin'
current_questions = []

i = 0
while i < len(lines):
    line = lines[i]
    if re.match(r'^(?:Bài\s*\d+|Kiểm\s*tra\s*\d+|kiểm\s*tra\s*\d+|Kiểm\s*tra\s*giữa\s*kỳ)', line, re.IGNORECASE):
        if current_questions:
            chapters.append({'title': current_chapter, 'questions': current_questions})
            current_questions = []
        current_chapter = line
        i += 1
        continue
    
    if re.match(r'^\d+\.', line) or re.match(r'^\(CLO\d+\)', line):
        q_lines = [line]
        i += 1
        # Gather until next question or chapter or option A.
        while i < len(lines):
            l = lines[i]
            if re.match(r'^(?:Bài\s*\d+|Kiểm\s*tra\s*\d+|kiểm\s*tra\s*\d+|Kiểm\s*tra\s*giữa\s*kỳ)', l, re.IGNORECASE) or re.match(r'^\d+\.', l) or re.match(r'^\(CLO\d+\)', l):
                break
            q_lines.append(l)
            i += 1
        
        # Now parse q_lines into question_text, options, and trailing marker (e.g. đúng / sai)
        current_questions.append(q_lines)
    else:
        i += 1

if current_questions:
    chapters.append({'title': current_chapter, 'questions': current_questions})

print(f'Total chapters: {len(chapters)}')
for idx, c in enumerate(chapters):
    print(f"Chapter {idx+1}: {c['title']} - {len(c['questions'])} questions")
