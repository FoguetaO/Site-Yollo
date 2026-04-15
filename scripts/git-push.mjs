import { execSync } from "child_process"

const run = (cmd) => {
  console.log(`[v0] Executando: ${cmd}`)
  const output = execSync(cmd, { cwd: "/vercel/share/v0-project", encoding: "utf8" })
  if (output) console.log(output)
  return output
}

try {
  run("git add -A")

  const status = execSync("git status --porcelain", {
    cwd: "/vercel/share/v0-project",
    encoding: "utf8",
  })

  if (!status.trim()) {
    console.log("[v0] Nenhuma alteração pendente para commitar.")
  } else {
    run(`git commit -m "fix: responsividade mobile — títulos, subheadlines e botões CTA

- Remove fontSize inline fixo (51px) dos heroes
- Corrige H2 de seções para text-xl sm:text-2xl em mobile
- Corrige subheadlines: text-lg → text-sm sm:text-base md:text-lg
- Corrige spans gradient que ultrapassavam o h2 pai em mobile
- Reduz números dos stats: text-7xl → text-5xl sm:text-7xl
- Ajusta CTAs primários e secundários com padding/font responsivo
- Escala ícones SVG dos botões com w-4/w-5 responsivo
- Adiciona 3 novos artigos ao blog
- Corrige backticks triplos no blog-data.ts

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"`)
  }

  run("git push")
  console.log("[v0] Push concluído com sucesso!")
} catch (err) {
  console.error("[v0] Erro:", err.message)
  process.exit(1)
}
