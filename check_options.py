import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('parsed_questions_raw.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'Total questions: {len(data)}')
option_counts = {}
for q in data:
    c = len(q['options'])
    option_counts[c] = option_counts.get(c, 0) + 1
    if c != 4:
        print(f"ID {q['id']} ({q['chapter']}) has {c} options:")
        print("  Q:", q['question'].replace('\n', ' ')[:80])
        for idx, o in enumerate(q['options']):
            print(f"   [{idx}] {o[:60]}")

print('Options length distribution:', option_counts)
