# 🗂️ Backend - Gerenciador de Tarefas

API RESTful desenvolvida com **Node.js**, **Express**, **Sequelize** e **MySQL**, que permite realizar operações de cadastro, listagem, atualização e exclusão de tarefas.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

---

## 📦 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um aquivo `.env`na raiz do backend com os seguintes dados:

```bash
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=task_manager
DB_DIALECT=mysql
PORT=3000
```

### 4. Crie o banco de dados no MySQL

```sql
CREATE DATABASE task_manager;
```

O sequelize criará automaticamente a tabela `Tasks` na primeira execução.

### Executando o projeto

#### Desenvolvimento (com hot reload)

```bash
npm run dev
```

#### Produção

```bash
npm start
```

O servidor estará rodando na porta definida no `.env` (ex.: `http://localhost:3000`)

### Estrutura de pastas
```bash
backend/
├── src/
│   ├── config/         # Configurações (database)
│   ├── controllers/    # Controladores (lógica das rotas)
│   ├── models/         # Modelos Sequelize
│   ├── routes/         # Definição das rotas
│   ├── services/       # Regra de negócio (opcional)
│   ├── app.js          # Configuração principal do app
│   └── server.js       # Inicialização do servidor
├── .env                # Variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo git
├── package.json        # Configurações do projeto e dependências
├── README.md           # Documentação
```

### Endpoints da API

```bash
Método   |   Endpoint      |      Descrição
GET      |    /tasks       | Listar todas as tarefas
GET      |    /tasks/:id   | Obter uma tarefa por ID
POST     |    /tasks       | Criar uma nova tarefa
PUT      |    /tasks/:id   | Atualizar uma tarefa
DELETE   |    /tasks/:id   | Excluir uma tarefa
```

### Exemplo de JSON para criar uma tarefa (POST /tasks)

```json
{
  "title": "Estudar Angular",
  "description": "Revisar módulos e componentes",
  "dueDate": "2025-06-01",
  "completed": false
}
```

### Tratamento de erros

- Retorno de status HTTP adequados:
    - 500 - Erros internos
    - 404 - Tarefa não encontrada
    - 201 - Criado com sucesso
    - 204 - Deletado com sucesso

### Boas práticas adotadas

- Organização em camadas (`controllers`, `models`, `routes`, `services`)
- Uso de variáveis de ambiente
- Padronização de código com responsabilidades bem definidas
- Uso de commits semânticos