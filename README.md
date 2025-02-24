# Projeto Security UI

## Visão Geral
Security UI é um projeto de frontend projetado para fornecer uma interface segura e amigável para autenticação e funcionalidades relacionadas à segurança.

## Estrutura do Projeto
```
security-ui/
│-- src/
│   │-- components/      # Componentes reutilizáveis da UI
│   │-- pages/           # Páginas da aplicação
│   │-- assets/          # Arquivos estáticos (imagens, ícones, etc.)
│   │-- utils/           # Funções utilitárias
│   │-- hooks/           # Hooks personalizados do React
│-- public/              # Arquivos públicos (index.html, etc.)
│-- .gitignore           # Arquivo de ignore do Git
│-- package.json         # Dependências e scripts do projeto
│-- tsconfig.json        # Configuração do TypeScript
│-- README.md            # Documentação do projeto
```

## Instalação
Certifique-se de que o Node.js está instalado e execute os seguintes comandos:
```sh
npm install  # Instalar dependências
```

## Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:
```sh
npm run dev
```
A aplicação estará acessível em `http://localhost:3000/`.

## Construindo para Produção
Para criar uma versão otimizada, use:
```sh
npm run build
```

## Tecnologias Utilizadas
- React
- TypeScript
- Bootstrap
- React Router
