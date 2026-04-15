import os
import glob

PROJECT_ROOT = "/vercel/share/v0-project"

EXTENSIONS = ["*.tsx", "*.ts", "*.md"]
EXCLUDE_DIRS = {".git", "node_modules", ".next", "user_read_only_context", "scripts"}

EM_DASH = "\u2014"  # —

files_changed = []
total_replacements = 0

for ext in EXTENSIONS:
    pattern = os.path.join(PROJECT_ROOT, "**", ext)
    matches = glob.glob(pattern, recursive=True)
    print(f"Pattern {pattern}: {len(matches)} files found")
    for filepath in matches:
        # Skip excluded directories
        parts = filepath.replace(PROJECT_ROOT, "").split(os.sep)
        if any(part in EXCLUDE_DIRS for part in parts):
            continue

        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            if EM_DASH not in content:
                continue

            count = content.count(EM_DASH)
            # Replace em dash with a regular hyphen surrounded by spaces
            new_content = content.replace(EM_DASH, " - ")
            # Clean up any triple spaces that might result
            new_content = new_content.replace("   ", " ")

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)

            files_changed.append((filepath.replace(PROJECT_ROOT, ""), count))
            total_replacements += count
            print(f"Fixed {count}x — in {filepath.replace(PROJECT_ROOT, '')}")

        except Exception as e:
            print(f"Error processing {filepath}: {e}")

print(f"\nDone! Replaced {total_replacements} em dashes across {len(files_changed)} files.")
