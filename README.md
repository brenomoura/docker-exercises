# Exercícios Docker

Este repositório contém dois exercícios referentes aos estudos de Docker.

## Buildar Imagem Go [DONE]

O primeiro execício tinha como proposta a confecção de uma imagem Docker contendo um binário de Golang, ao rodar um container com essa imagem buildada, deverá aparecer a seguinte mensagem:
```
Code.education Rocks!
```
A imagem deverá obrigatoriamente ter menos de 2 MB.

## Nginx com Node.js utilizando docker-compose [WIP]

A idéia principal do exercício é que quando um usuário acesse o nginx, o mesmo fará uma chamada para uma aplicação node.js. Essa aplicação por sua vez adicionará um registro em um banco de dados MySQL, cadastrando um nome na tabela chamada people.
O retorno da aplicação node.js para o nginx deverá ser:

```
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```
