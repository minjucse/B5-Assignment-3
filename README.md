A Library Management System built with Express, TypeScript, and MongoDB (Mongoose).

Technologies
Node.js & Express – Backend framework

TypeScript – Type safety

MongoDB – Database

Mongoose – ODM for MongoDB

ts-node-dev – Development server

Project Folder Structure

project-root/
│
├── src/
│   ├── app/
│   ├── controllers/
│   │   ├── book.controller.ts
│   │   └── borrow.controller.ts
│   ├── models/
│   │   ├── book.model.ts
│   │   └── borrow.model.ts
│   └── interfaces/
│       ├── book.interface.ts
│   │   └── borrow.interface.ts
│
├── app.ts
├── server.ts
├── .env
├── package.json
└── tsconfig.json
└── vercel.json

controllers/ → API logic
models/ → Mongoose schemas and methods
interfaces/ → TypeScript interfaces
app.ts → Express app configuration
server.ts → Application entry point

Setup Instructions

Clone the repository:

git clone <https://github.com/minjucse/B5-Assignment-3>
cd <project-folder>


Install dependencies:

npm install


Create a .env file in the root directory:

PORT=5000
DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
NODE_ENV=development


Run the development server:

npm run dev


Visit API: http://localhost:5000