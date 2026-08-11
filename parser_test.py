import sys, io, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('DanhSachCauHoi.txt', 'r', encoding='utf-8') as f:
    text = f.read()

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
        q_text = line
        i += 1
        opts = []
        while i < len(lines):
            l = lines[i]
            if re.match(r'^(?:Bài\s*\d+|Kiểm\s*tra\s*\d+|kiểm\s*tra\s*\d+|Kiểm\s*tra\s*giữa\s*kỳ)', l, re.IGNORECASE) or re.match(r'^\d+\.', l) or re.match(r'^\(CLO\d+\)', l):
                break
            opts.append(l)
            i += 1
        current_questions.append({'question': q_text, 'raw_options': opts})
    else:
        print(f'Stray line in {current_chapter}: {repr(line)}')
        i += 1

if current_questions:
    chapters.append({'title': current_chapter, 'questions': current_questions})

print(f'Parsed {len(chapters)} chapters:')
total_q = 0
for c in chapters:
    print(f" - {c['title']}: {len(c['questions'])} questions")
    total_q += len(c['questions'])
print(f'Total questions: {total_q}')
