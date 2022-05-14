## Nginx + Node.js (express) + MySQL - Exercício (Português)

Para buildar as imagens e rodar os containeres, será necessário utilizar a versão  1.29.2 do docker-compose.

Com o docker-compose instalado, será necessário rodar o comando descrito abaixo.

```
docker-compose up -d
```

Talvez levará um tempo para rodar na primeira vez, pois será feito o download, build e configuração de todas as imagens necessárias.

## Uso da aplicação

Após todos os containeres subirem corretamente, será possível acessar a aplicação no endereço `localhost:8080`.

Ao acessar irá aparecer a mensagem proposta no exercício. Para validar o funcionamento do banco de dados MySQL, deve-se utilizar _query parameters_ na url ao fazer a requisição, conforme descrito no exemplo abaixo.

```
http://localhost:8080/?name=<algum_nome>
GET - 200 OK
```
Com a requisição feita com o _query parameter_ conforme descrito acima, a aplicação irá inserir um registro com o valor do _query parameter_ no banco de dados. A página HTML irá se atualizar com um listagem dos nomes inseridos conforme cada requisição feita com o _query parameter_.

---

## Nginx + Node.js (express) + MySQL - Exercise (English)

To build the images and run the containers, it will be necessary to use the 1.29.2 version from docker-compose.

With docker-compose installed, it will be necessary to run the command described below.

```
docker-compose up -d
```
Maybe it will demand a time to run for the first time, because the download, build and configuration of all images will be done.

## Application Usage

After all containers go up correctly, it will be possible to access the application using the address `localhost:8080`.

When accessing, the proposed message in the exercise will be show. To validate if the MySQL is operating correctly, query parameters must be used in the url when making the request, as described in the example below.

```
http://localhost:8080/?name=<some_name>
GET - 200 OK
```
With the request made with the query parameter as described above, the application will insert a regist with the query parameter value in the database. The HTML page will update with a list of names inserted as each request made with the query parameter.
