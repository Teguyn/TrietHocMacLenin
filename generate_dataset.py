import sys, io, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('DanhSachCauHoi.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the missing dot in 120 Giá trị khoa học
text = re.sub(r'(\n\s*120)\s+(Giá trị)', r'\1. \2', text)

lines = [l.strip() for l in text.split('\n') if l.strip()]

raw_sections = []
current_chapter = 'Bài 1: Triết Học và triết học mác lênin'
current_questions = []

i = 0
while i < len(lines):
    line = lines[i]
    if re.match(r'^(?:Bài\s*\d+|Kiểm\s*tra\s*\d+|kiểm\s*tra\s*\d+|Kiểm\s*tra\s*giữa\s*kỳ)', line, re.IGNORECASE):
        if current_questions:
            raw_sections.append({'chapter': current_chapter, 'questions': current_questions})
            current_questions = []
        current_chapter = line.strip().rstrip(':')
        i += 1
        continue
    
    if re.match(r'^\d+\.', line) or re.match(r'^\(CLO\d+\)', line):
        q_lines = [line]
        i += 1
        while i < len(lines):
            l = lines[i]
            if re.match(r'^(?:Bài\s*\d+|Kiểm\s*tra\s*\d+|kiểm\s*tra\s*\d+|Kiểm\s*tra\s*giữa\s*kỳ)', l, re.IGNORECASE) or re.match(r'^\d+\.', l) or re.match(r'^\(CLO\d+\)', l):
                break
            q_lines.append(l)
            i += 1
        current_questions.append(q_lines)
    else:
        i += 1

if current_questions:
    raw_sections.append({'chapter': current_chapter, 'questions': current_questions})

# Normalize chapter names
chapter_names_map = {
    'Bài 1: Triết Học và triết học mác lênin': 'Bài 1: Triết học & Triết học Mác - Lênin',
    'Bài 2: CHủ nghĩa duy vật biện chứng': 'Bài 2: Chủ nghĩa duy vật biện chứng',
    'Bài 3: Chủ Nghĩa duy vật lích sử': 'Bài 3: Chủ nghĩa duy vật lịch sử',
    'Kiểm Tra 1': 'Đề kiểm tra số 1',
    'kiểm tra 2': 'Đề kiểm tra số 2',
    'Kiểm tra giữa kỳ': 'Đề kiểm tra giữa kỳ'
}

all_parsed_questions = []
global_id = 1

for sec in raw_sections:
    chap_name = chapter_names_map.get(sec['chapter'], sec['chapter'])
    for q_lines in sec['questions']:
        # Extract question text and options
        raw_q = q_lines[0]
        # Clean up question number or (CLO...) tag
        clo_match = re.match(r'^\((CLO\d+)\)\s*(.*)', raw_q)
        tag = ""
        if clo_match:
            tag = clo_match.group(1)
            q_text = clo_match.group(2).strip()
        else:
            q_num_match = re.match(r'^\d+\.\s*(.*)', raw_q)
            if q_num_match:
                q_text = q_num_match.group(1).strip()
            else:
                q_text = raw_q.strip()
        
        # Check if subsequent lines belong to question text before options start (like quotes or poems)
        idx = 1
        while idx < len(q_lines):
            l = q_lines[idx]
            # Check if this line is an option like A. / A) / A:
            if re.match(r'^[A-D][\.\:\)]\s*', l):
                break
            # If in exam sections without A-D prefixes:
            if tag and idx >= 1 and (len(q_lines) - idx <= 4 or (len(q_lines) - idx <= 5 and q_lines[-1].lower() in ('đúng', 'sai'))):
                break
            # Otherwise it's part of question text
            q_text += "\n" + l
            idx += 1
        
        options_raw = q_lines[idx:]
        # Check if last line is a marker 'đúng', 'sai'
        marker = ""
        if options_raw and options_raw[-1].lower() in ('đúng', 'sai'):
            marker = options_raw[-1].lower()
            options_raw = options_raw[:-1]
        
        options = []
        for o in options_raw:
            # Strip A. B. C. D. if present
            cleaned_opt = re.sub(r'^[A-D][\.\:\)]\s*', '', o).strip()
            if cleaned_opt:
                options.append(cleaned_opt)
        
        all_parsed_questions.append({
            'id': global_id,
            'chapter': chap_name,
            'tag': tag,
            'question': q_text,
            'options': options,
            'marker': marker
        })
        global_id += 1

print(f'Parsed {len(all_parsed_questions)} questions in total.')
# Save to JSON for analysis
with open('parsed_questions_raw.json', 'w', encoding='utf-8') as f:
    json.dump(all_parsed_questions, f, ensure_ascii=False, indent=2)
