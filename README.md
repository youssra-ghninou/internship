npx prisma db push : prismasync schema without losing data

npx prisma generate : Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing

Can confirm, just had the same error.
Tried installing @prisma/client manually, it seems to help. So here is a possible workaround until the problem is fixed.

Delete node_modules
Run npm install
Run npm install @prisma/client
Run npx prisma generate / npm prisma migrate dev
