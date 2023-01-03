import { describe, beforeEach, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import Expense from "../../../models/Expense";
import expense from "../../fixtures/expense.fixture";

describe("Expense model", () => {
  describe("Expense validation", () => {
    let newExpense;
    beforeEach(() => {
      newExpense = { ...expense };
    });

    test("should correctly validate a valid expense", async () => {
      await expect(new Expense(newExpense).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if title is blank", async () => {
      newExpense.title = "";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if title length exceeds 100", async () => {
      newExpense.title = faker.lorem.words(1001);
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should be fine if length of title is less than 101", async () => {
      newExpense.title = faker.lorem.words(2);
      await expect(new Expense(newExpense).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if type is blank", async () => {
      newExpense.type = "";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if type length exceeds 50", async () => {
      newExpense.type = faker.lorem.words(51);
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should be fine if length of type is less than 51", async () => {
      newExpense.type = faker.lorem.words(1);
      await expect(new Expense(newExpense).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if status is blank", async () => {
      newExpense.status = "";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if status is other than ['paid','unpaid'] ", async () => {
      newExpense.status = "pending";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should be fine if status is from ['paid','unpaid'] ", async () => {
      newExpense.status = "paid";
      await expect(new Expense(newExpense).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if amount is blank", async () => {
      newExpense.amount = "";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if amount greater than 100000000000", async () => {
      newExpense.amount = 1000000000001;
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if amount less than 0", async () => {
      newExpense.amount = -1;
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should be fine if length of amount is less than 100000000001", async () => {
      newExpense.amount = 1001;
      await expect(new Expense(newExpense).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if amountType is blank", async () => {
      newExpense.amountType = "";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if amountType is other than ['incoming', 'outgoing'] ", async () => {
      newExpense.amountType = "pending";
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should be fine if amountType is from ['incoming', 'outgoing'] ", async () => {
      newExpense.amountType = "incoming";
      await expect(new Expense(newExpense).validate()).resolves.toBeUndefined();
    });

    test("should throw a validation error if owner is null", async () => {
      newExpense.owner = null;
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if sheet is null", async () => {
      newExpense.sheet = null;
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });

    test("should throw a validation error if both sheet and owner are null", async () => {
      newExpense.sheet = null;
      newExpense.owner = null;
      await expect(new Expense(newExpense).validate()).rejects.toThrow();
    });
  });
});
