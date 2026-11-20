# NLP · Site institucional

Site institucional da NLP. Stack simples e moderna, pronta para deploy na Vercel.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens da marca em `src/app/globals.css`)
- Fonte **Sora** (via `@fontsource-variable/sora`, sem depender do Google Fonts no build)
- **ESLint** + **Prettier** (com ordenação de classes do Tailwind)

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Comando                  | O que faz                                      |
| ------------------------ | ---------------------------------------------- |
| `npm run dev`            | Servidor de desenvolvimento                    |
| `npm run build`          | Build de produção (o que a Vercel roda)        |
| `npm run lint`           | Verifica o código                              |
| `npm run format`         | Formata todos os arquivos                      |
| `npm run preview:static` | Gera HTML estático em `/out` (prévias rápidas) |

## Estrutura

```
src/
  app/
    layout.tsx         # HTML base, SEO (title/description), idioma pt-BR
    page.tsx           # Home: monta as seções na ordem
    globals.css        # Tokens (cores, fonte, animações) e fundo verde canelado
  components/
    sections/          # Uma seção por arquivo (hero, header, ...)
    ui/                # Peças reutilizáveis (botão, ...)
  lib/
    site.ts            # Nome, menu e link do CTA: edite aqui
```

## Deploy na Vercel

1. Em vercel.com, **Add New → Project** e importe este repositório.
2. A Vercel detecta Next.js sozinha. Não precisa configurar nada.
3. Cada push na `main` publica em produção; cada PR ganha um link de prévia.

## Pendências de conteúdo

- Logo oficial (hoje é um "N" provisório em `components/sections/header.tsx`)
- Destino do botão principal (`ctaHref` em `src/lib/site.ts`): WhatsApp ou formulário
- Seções seguintes: Método, Resultados, Contato
