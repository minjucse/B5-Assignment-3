# 📚 Library Management System

A **Library Management System** built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Technologies Used
- **Node.js & Express** – Backend framework  
- **TypeScript** – Type safety  
- **MongoDB** – NoSQL Database  
- **Mongoose** – ODM for MongoDB  
- **ts-node-dev** – Development server  

---

## 📂 Project Folder Structure


### 📁 Folder Explanation
- **src/app/** → Core application logic and configuration  
- **src/controllers/** → Handles API request logic  
  - `book.controller.ts` → API logic for books  
  - `borrow.controller.ts` → API logic for borrowing books  
- **src/models/** → Mongoose schemas and database models  
  - `book.model.ts` → Book schema  
  - `borrow.model.ts` → Borrow schema  
- **src/interfaces/** → TypeScript interfaces for type safety  
  - `book.interface.ts` → Book interface  
  - `borrow.interface.ts` → Borrow interface  
- **app.ts** → Express app setup  
- **server.ts** → Application entry point  
- **.env** → Environment variables  
- **package.json** → Project dependencies and scripts  
- **tsconfig.json** → TypeScript configuration  
- **vercel.json** → Vercel deployment configuration



### 📁 Folder Explanation
- **controllers/** → API logic  
- **models/** → Mongoose schemas and methods  
- **interfaces/** → TypeScript interfaces  
- **app.ts** → Express app configuration  
- **server.ts** → Application entry point  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/minjucse/B5-Assignment-3
cd <project-folder>



### 2️⃣ Install dependencies
```bash
npm install

### Create a `.env` file in the root directory

```env
PORT=5000
DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
NODE_ENV=development


### Run the development server
```bash
npm run dev


### Visit API  
👉 [http://localhost:5000](http://localhost:5000)
