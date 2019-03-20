# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Instalando adonis

```
npm install -g @adonisjs/cli
```

### Criar a api

```
adonis new -h
adonis new (nome da api) --api-only
```

### Iniciar o servidor

```
adonis serve --dev
```

### Instalando o eslint

```
npm install -D eslint
npx eslint --init
```
