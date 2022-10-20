## S4-14 | 🏁 Entrega: CRUD (TypeORM + PostgreSQL)

## Entrega: CRUD (TypeORM + PostgreSQL)
```js
Importante!
Lembre-se de que essa entrega é individual e qualquer suspeita de plágio ou interferência na entrega de outro aluno pode ser questionada pela equipe de ensino.
```

Nessa entrega vamos desenvolver um serviço de back-end responsável por gerenciar um CRUD de usuário utilizando TypeORM.

```
Aviso!

Atente-se à rubrica presente no fim da página, ela contém os itens à serem avaliados e também o peso de cada item.
```

Use o mesmo Template utilizado nos projetos diários

Será necessário criar o banco de dados, vamos dar a ele o nome de "users_database".

____
## Endpoints do serviço:
```
Método  Endpoint	 Responsabilidade
POST    /users	     Criação de usuário
GET	    /users	     Lista todos os usuários
PATCH   /users/<id>	 Att dados do usuário 
DELETE	/users/<id>	 soft delete no usuário

POST	/login	     Gera o token de autenticação
```
____
## Requisitos do Serviço

Você deve usar as migrations para criação da tabela com os seguintes dados

POST - `/users`

- Rota para criação de usuário com os seguintes dados:
  - name: string

  - email: string

  - password: Deverá receber uma string mas armazenar uma hash gerada com o bcrypt

  - isAdm: boolean

  - isActive: Não deve ser passado mas gerado no momento da validação dos dados no formato boolean com default = true

  - createdAt: Não deve ser passado mas gerado no momento da validação dos dados no formato Date

  - updatedAt: Não deve ser passado mas gerado no momento da validação dos dados no formato Date, deve iniciar com o valor de criação (mesmo valor do campo createdAt) e deve ser atualizado sempre que esse usuário for atualizado.

  - id: Não deve ser passado mas gerado no momento da validação dos dados, deve um uuidv4.

- A rota de criação deve retornar todos os dados, com exceção da hash de senha.

- Não podem ser cadastrados dois usuário com o mesmo e-mail.

## GET - `/users`

- A rota deve retornar todos os dados dos usuários, com exceção da hash de senha.

- a rota pode ser acessada apenas por administradores.

## PATCH - `/users/<id>`

- A rota deve atualizar os dados do usuário,.

- Não deve ser possível atualizar os campos id, isAdm e isActive.

- Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.

## DELETE - `/users/<id>`

- A rota deve realizar um soft delete do usuário, alterando isActive para false.

- A rota pode ser acessada apenas por administradores.

- Não deve ser possível realizar um soft delete um usuário inativo.

## POST - `/login`

- Rota de login recebendo email e password

- O login deve validar se o usuário existe e validar se a senha está correta.