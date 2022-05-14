# Exercícios Docker (Português)

Este repositório contém dois exercícios referentes aos estudos de Docker.

## Buildar Imagem Go [DONE]

O primeiro execício tinha como proposta a confecção de uma imagem Docker contendo um binário de Golang, ao rodar um container com essa imagem buildada, deverá aparecer a seguinte mensagem:
```
Code.education Rocks!
```
A imagem deverá obrigatoriamente ter menos de 2 MB.

## Nginx com Node.js utilizando docker-compose [DONE]

A idéia principal do exercício é que quando um usuário acesse o nginx, o mesmo fará uma chamada para uma aplicação node.js. Essa aplicação por sua vez adicionará um registro em um banco de dados MySQL, cadastrando um nome na tabela chamada people.
O retorno da aplicação node.js para o nginx deverá ser:

```
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```

---

# Docker Exercises (English)

This repository contains two exercices related to the docker studies.

## Go Image Build [DONE]

The first exercise proposed the creation of a Docker image that contains a Golang binary, when running a container with this built image, it will be show the following message:
```
Code.education Rocks!
```
A imagem deverá obrigatoriamente ter menos de 2 MB.
The image must have less than 2 MB.

## Nginx with Node.js and MySQL using docker-compose [DONE]

The main exercise idea is that, whan a user access the nginx, this one will make a call to the node.js application. This application, will add a register in the MySQL database, registering a name in the table called people.
The node.js application must return:

```
<h1>Full Cycle Rocks!</h1>
- List of name registered in the database
