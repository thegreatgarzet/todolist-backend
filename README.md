<h1>Backend Todo-List</h1>

Projeto de backend feito utilizando Node.js e Express, com um banco de dados em MongoDB e validação de usuário utilizando JWT.

# <h2>Funcionalidades</h2>
- Registrar usuario
- Login de usuario
- CRUD completo de uma lista de tarefas (Criar, listar, atualizar, marcar como concluida e deletar).
- Filtro de Tarefas por ordem alfabetica e pesquisa
- Separação de Tarefas por usuarios (cada usuario logado só pode ver e alterar as suas próprias Tarefas).

## Como rodar localmente:
### Backend:
- cd todolist-backend
- npm install
- npm run dev

## Frontend
Você pode utilizar um front próprio, mas se quiser testar com um já existente, utilize o meu (https://github.com/thegreatgarzet/react-todolist)

## Varíaveis de ambiente necessárias
- MONGO_URI=
- JWT_SECRET=
