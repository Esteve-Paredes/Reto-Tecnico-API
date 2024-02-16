# API de Gestión de Archivos CSV con Multer y CSV-Parse

## Descripción

Esta API permite la carga, lectura y almacenamiento de archivos CSV utilizando las bibliotecas Multer y CSV-Parse. También incluye funcionalidades de migración de datos con Umzug.

## Instalación

# Clonar el repositorio

git clone https://github.com/Esteve-Paredes/Reto-Tecnico-API

# Cambiar al directorio del repositorio

cd Reto-Tecnico-API

# Instalar todas las dependencias

npm install

---

## Configurar archivo .env

hacer una copia del archivo .env.example y completar con los datos siguientes:

PGHOST=localhost
PGDATABASE=[nombre-de-la-database]
PGPORT=5432
PGUSER=[usuario]
PGPASSWORD=[password]
PGADMINDATABASE=[nombre-de-db-administrativa]

---

## Migración

# Scripts de Migración

En este proyecto, se han definido varios scripts para manejar las migraciones de la base de datos. Aquí te dejo una descripción de lo que hace cada uno:

- `db:migrate`: Ejecuta las migraciones en tu base de datos utilizando el archivo `dbMigrate.ts`.
- `db:create`: Crea la base de datos utilizando el archivo `dbCreate.ts`.
- `db:drop`: Elimina la base de datos utilizando el archivo `dbDrop.ts` y también elimina el archivo `migrations.json`.
- `db:reset`: Resetea la base de datos. Primero elimina la base de datos, luego la crea de nuevo y finalmente ejecuta las migraciones.

Para ejecutar cualquiera de estos scripts, puedes usar el comando `npm run` seguido del nombre del script. Por ejemplo, para ejecutar las migraciones, puedes usar el siguiente comando:

```bash

npm run db:migrate

```

# 5 comando de db:migrate

- `up`: Aplica migraciones pendientes (función `up` del archivo de migración)
- `down`: Revierte migraciones (función `down` del archivo de migración)
- `pending`: Lista migraciones pendientes
- `executed`: Lista migraciones ejecutadas
- `create`: Crea una archivo de migración (usando la plantilla indicada en la configuración)

# Crear una Migracion

Si queremos crear una nueva migracion podemos ejecutar el siguiente comando:

```bash
npm run db:migrate create -- --name [filename.ts]
```
