# Novix Linktree

Projeto estático simples (HTML/CSS/JS) com dois links:

- "entre em contato" (WhatsApp)
- "Site Novix"

## Como usar

1. Coloque a logo em `assets/novix-logo.png` (PNG enviado pelo cliente).
2. Abra `script.js` e substitua o `WHATSAPP_NUMBER` pelo número oficial no formato apenas dígitos, por exemplo: `5511912345678`.
3. Em `index.html`, atualize o link do site (`https://novix.example`) para o domínio real.
4. Abra o `index.html` no navegador.

## Acessibilidade e interações

- Animações suaves em hover para desktop (mudança de cor e elevação).
- Feedback no toque/focus para mobile (escala leve e realce).
- Respeita `prefers-reduced-motion` para usuários que preferem menos movimento.

## Estrutura

```
LinktreeNovix/
├─ index.html
├─ styles.css
├─ script.js
├─ assets/
│  └─ novix-logo.png  (adicione aqui)
└─ README.md
```
