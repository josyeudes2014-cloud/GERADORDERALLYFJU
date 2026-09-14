# RALLY FJU DO IDE

Base oficial do Rally FJU do IDE, preparada para sincronização via GitHub, preview no Lovable e deploy no Firebase Hosting.

A aplicação principal fica em `public/index.html` e usa o projeto Firebase `rallyfjuniteroi`. O site mantém ranking, missões, painel administrativo, gestão de obreiros e jovens, relatórios e PWA.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O build copia o conteúdo de `public/` para `dist/`, preservando a mesma aplicação utilizada pelo Firebase Hosting.
