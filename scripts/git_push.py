import subprocess
import sys
import os

# Resolve project root relative to this script's location
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
os.chdir(PROJECT_ROOT)
print(f"Working directory: {os.getcwd()}")

def run(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print(result.stderr)
    return result.returncode

print("==> git status")
run("git status --short")

print("\n==> git add .")
run("git add .")

print("\n==> git commit")
code = run('git commit -m "feat: responsividade mobile — títulos, subheadlines, CTAs e 3 novos artigos do blog\n\nCo-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"')

if code != 0:
    print("Nada para commitar ou erro no commit.")
    sys.exit(0)

print("\n==> git push")
code = run("git push")

if code == 0:
    print("\nPush realizado com sucesso!")
else:
    print("\nErro no push. Verifique as credenciais ou o remote.")
    sys.exit(1)
