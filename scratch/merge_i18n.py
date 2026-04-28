import re

src_file = '/home/angelo/Gemini/whitening-updated-site/js/i18n.js'
dst_file = '/home/angelo/Gemini/dentplant/js/i18n.js'

with open(src_file, 'r', encoding='utf-8') as f:
    src_content = f.read()

# Extract EL block
el_match = re.search(r'(// ── Whitening Page ──.*?al_label_after:\s*".*?",\n)', src_content, re.DOTALL)
el_keys = el_match.group(1) if el_match else ""

# Extract EN block
en_block_match = re.search(r'en:\s*{(.*)', src_content, re.DOTALL)
if en_block_match:
    en_content = en_block_match.group(1)
    en_match = re.search(r'(// ── Whitening Page ──.*?al_label_after:\s*".*?",\n)', en_content, re.DOTALL)
    en_keys = en_match.group(1) if en_match else ""
else:
    en_keys = ""

with open(dst_file, 'r', encoding='utf-8') as f:
    dst_content = f.read()

# Inject into EL
# Find where the el block ends. We can inject right before /* ── Footer ─────────────────────────────── */
# or /* ── Articles / Other ──────────────────── */
dst_content = dst_content.replace(
    '/* ── Articles / Other ──────────────────── */',
    el_keys + '\n      /* ── Articles / Other ──────────────────── */',
    1
)

# Inject into EN
# Find the second occurrence of /* ── Articles / Other ──────────────────── */
parts = dst_content.split('/* ── Articles / Other ──────────────────── */')
if len(parts) >= 3:
    dst_content = parts[0] + '/* ── Articles / Other ──────────────────── */' + parts[1] + en_keys + '\n      /* ── Articles / Other ──────────────────── */' + parts[2]

with open(dst_file, 'w', encoding='utf-8') as f:
    f.write(dst_content)

print("Merged i18n keys successfully")
