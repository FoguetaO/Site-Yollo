#!/bin/bash
set -e

cd /vercel/share/v0-project

git add -A

git commit -m "fix: responsividade mobile — títulos, subheadlines e botões CTA

- Remove fontSize inline fixo (51px) dos heroes — substituído por escala responsiva text-[1.75rem] → text-[3.2rem]
- Corrige H2 de seções: text-3xl mobile → text-xl sm:text-2xl em todos os segmentos
- Corrige subheadlines dos heroes: text-lg → text-sm sm:text-base md:text-lg
- Corrige spans de gradient que ultrapassavam o tamanho do h2 pai em mobile
- Reduz números dos stats: text-7xl → text-5xl sm:text-7xl em mobile
- Ajusta botões CTA primários: padding e font-size menores em mobile via media query no globals.css
- Ajusta botões CTA secundários: text-xs sm:text-sm com padding proporcional
- Escala ícones SVG dos botões: w-4 h-4 mobile → w-5 h-5 desktop
- Adiciona 3 novos artigos ao blog: passo-a-passo, boas-práticas e automação por segmento
- Corrige backticks triplos no blog-data.ts que quebravam o parse TypeScript

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"

git push

echo "Push concluído com sucesso!"
