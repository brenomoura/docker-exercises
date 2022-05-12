## Imagem Docker Go - Exercício (Português)
Abaixo contém o link para acessar a imagem docker criada nesse exercício.
https://hub.docker.com/repository/docker/brenomoura/codeeducation

Para rodar a imagem será necessário baixá-la utilizando o comando:

```
docker pull brenomoura/codeeducation
```

E para rodar a imagem, é necessário efetuar o comando abaixo.

```
docker run brenomoura/codeeducation  
```

## Buildar a imagem

Para efetuar o build da imagem, será necessário rodar o comando abaixo no mesmo diretório do `Dockerfile`.
```
docker build -t <image_name> .
```

---

## Go Docker Image - Exercise (English)
The link below contain the docker image used in this exercise.
https://hub.docker.com/repository/docker/brenomoura/codeeducation

To run the image, it will be necessary to download the image, for this, please run the commando below.

```
docker pull brenomoura/codeeducation
```

To run the image, will be necessary to type the command below

```
docker run brenomoura/codeeducation  
```

## Image Build

To build the image, will be necessary to run the command described below in the same path from `Dockerfile`
```
docker build -t <image_name> .
```
