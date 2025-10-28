import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../server";

describe("Testes de rotas /alunos", () => {
  it("deve cadastrar um aluno", async () => {
    const res = await request(app)
      .post("/alunos")
      .send({ nome: "João", curso: "ADS" });
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe("João");
  });
});
