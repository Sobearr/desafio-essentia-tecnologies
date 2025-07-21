# 📝 Desafio Essentia Tecnologies - Full Stack To-Do List

[![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Desafio para vaga Desenvolvedor Full Stack

---

## 📁 Estrutura do Projeto

```
todo-app/
├── todo-backend/ # Node.js + TypeORM + MySQL
├── todo-frontend/ # Angular 20 (componentes standalone)
└── docker-compose.yml # Docker config para criar servidor MySQL
```

---

## ⚙️ Configurando o Backend

### 1. Instale as dependências

```bash
cd todo-backend
npm install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo .env dentro da pasta todo-backend com os seguintes valores para utilizar o servidor MySQL do Docker:
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=todo_db
PORT=3000

### 3. Inicie o MySQL

Dentro da pasta todo-backend rode o comando

```bash
docker-compose up -d
```

### 4. Inicie o Backend

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000/

### 🌐 Configurando o Frontend

### 1. Instale as dependências (o comando abaixo assume que você está na pasta todo-backend)

```bash
cd ../todo-frontend
npm install
```

### 2. Inicie o Frontend

```bash
npm start
```

O app estará disponível em http://localhost:4200/
Certifique-se de que o backend está rodando na porta 3000.

# ✅ Funcionalidadse

- Criar novas tarefas através de um formulário
- Marcar tarefas como concluídas
- Editar título da tarefa
- Deletar tarefa
- Filtrar tarefas por: Todas / Ativas / Completas
- Estrutura modular com Angular (componentes independentes e signals)

# 🧪 Tecnologias Utilizadas

| Stack     | Tecnologia                            |
| --------- | ------------------------------------- |
| Frontend  | Angular 20, Tailwind CSS              |
| Backend   | Node.js, Express, TypeScript, TypeORM |
| Database  | MySQL                                 |
| Dev Tools | Docker, VSCode, Postman               |
