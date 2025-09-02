/* Command Start */
1-> npm i prisma -D
2-> npm install @prisma/client
3-> npx prisma  init --datasource-provider sqlite

/* Command end */


/* DB Start*/

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
  //url      = "file:app.db"
}
//4-> create module
model Product{
  id           Int  @id @default(autoincrement())
  title        String
  price        Int
  description  String?
}
/* DB End*/


/* Command Start */
5-> npx prisma migrate dev --name init
npx prisma migrate dev
/* Command end */