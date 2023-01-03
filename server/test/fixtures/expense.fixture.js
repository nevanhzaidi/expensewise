import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import { user } from "./user.fixture";
import sheet from "./sheet.fixture";

const expense = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.word(2),
  description: faker.lorem.words(10),
  type: faker.lorem.word(1),
  status: "unpaid",
  amount: faker.random.numeric(5),
  amountType: "incoming",
  sheet,
  owner: user,
};

export default expense;
