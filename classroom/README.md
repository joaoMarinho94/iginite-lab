## Purchases Service

Serviço responsável pela parte de sala de aulas
## Iniciar Containers

```bash
#pasta raiz
$ sudo docker-compose up

#parar containers
$ sudo docker-compose down

#url Apache kafka
$ http://localhost:8080/
```

## Rodar Aplicação

Copiar .env.example para .env e adicionar os valores

```bash
#instalar depêndencias
$ yarn install

#ambiente dev
$ yarn start:dev
```

## Prisma ORM

```bash
# rodar migrations
$ yarn prisma migration dev

# prisma studio (SGBD)
$ yarn prisma studio
```