# 🚀 Meu Projeto CI/CD

Projeto web simples construído com **Vite + JavaScript** para praticar um fluxo completo de **CI/CD** com GitHub Actions.

## 📋 Funcionalidades

- ✅ Lista de tarefas interativa com persistência local
- 🔨 Build otimizado com Vite
- 🧪 Testes unitários com Vitest
- 🤖 Pipeline de CI/CD com GitHub Actions

## 🛠️ Tecnologias

- [Vite](https://vitejs.dev/) — build tool
- [Vitest](https://vitest.dev/) — testes unitários
- [GitHub Actions](https://github.com/features/actions) — CI/CD
- [Docker](https://www.docker.com/) — containerização
- [Ruby](https://www.ruby-lang.org/) — aplicação de exemplo

## 🐳 Docker

O projeto inclui um Dockerfile para uma aplicação Ruby simples usando Sinatra.

Para construir e executar:

```bash
docker build -t ruby-app .
docker run -p 4567:4567 ruby-app
```

## 🚀 Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Executar testes
npm test

# Gerar build de produção
npm run build
```

## ⚙️ Pipeline CI/CD

O workflow em `.github/workflows/ci.yml` é ativado em todo `push` e `pull_request`:

1. **Build & Testes** — instala dependências, roda testes e gera o build
2. **Deploy** — simulado na branch `main` (pode ser configurado para Vercel/Netlify)

## 📁 Estrutura

```
├── .github/
│   └── workflows/
│       └── ci.yml       # Pipeline GitHub Actions
├── src/
│   ├── main.js          # Entry point
│   ├── app.js           # Lógica principal + funções exportadas
│   ├── app.test.js      # Testes unitários (Vitest)
│   └── style.css        # Estilos
├── index.html
├── vite.config.js
└── package.json

## Status do Pipeline

- Esta branch adiciona melhorias no workflow de CI/CD e configurações de imagem Docker para publicação no Docker Hub.

```
## Status do Pipeline
