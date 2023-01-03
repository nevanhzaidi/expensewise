import { describe, beforeEach, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import Sheet from "../../../models/Sheet";
import sheet from "../../fixtures/sheet.fixture";

describe("Sheet model", () => {
  describe("Sheet validation", () => {
    let newSheet;
    beforeEach(() => {
      newSheet = { ...sheet };
    });

    test("should correctly validate a valid sheet", async () => {
      await expect(new Sheet(newSheet).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if owner is null", async () => {
      newSheet.owner = null;
      await expect(new Sheet(newSheet).validate()).rejects.toThrow();
    });

    test("should throw a validation error if title is blank", async () => {
      newSheet.title = "";
      await expect(new Sheet(newSheet).validate()).rejects.toThrow();
    });

    test("should be fine if description is blank", async () => {
      newSheet.description = "";
      await expect(new Sheet(newSheet).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if title length exceeds 100", async () => {
      newSheet.title = faker.lorem.words(1001);
      await expect(new Sheet(newSheet).validate()).rejects.toThrow();
    });

    test("should throw a validation error if description length exceeds 51", async () => {
      newSheet.description = faker.lorem.words(10001);
      await expect(new Sheet(newSheet).validate()).rejects.toThrow();
    });

    test("should be fine if length of title is less than 101", async () => {
      newSheet.title = faker.lorem.words(2);
      await expect(new Sheet(newSheet).validate()).resolves.toBeUndefined();
    });

    test("should be fine if length of description is less than 1001", async () => {
      newSheet.description = faker.lorem.words(2);
      await expect(new Sheet(newSheet).validate()).resolves.toBeUndefined();
    });
  });
});
