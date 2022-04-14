## Purchases Service

Serviço responsável pela parte de pagamentos da aplicação
## Iniciar Containers

```bash
#pasta raiz
$ sudo docker-compose up
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