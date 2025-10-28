import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rota para cadastrar aluno
app.post("/alunos", async (req, res) => {
  const { nome, curso } = req.body;
  const aluno = await prisma.aluno.create({ data: { nome, curso } });
  res.status(201).json(aluno);
});

// Rota para listar alunos
app.get("/alunos", async (req, res) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
});

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));
export default app;
