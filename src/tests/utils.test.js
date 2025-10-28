import { describe, it, expect } from "vitest";
import { formatName } from "../utils/formatName.js";

describe("Função formatName", () => {
  it("deve retornar o nome em maiúsculas", () => {
    expect(formatName("  maria  ")).toBe("MARIA");
  });
});
