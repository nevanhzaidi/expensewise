// eslint-disable-next-line node/no-unpublished-import
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import { user } from "./user.fixture";

const sheet = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.word(2),
  description: faker.lorem.words(10),
  owner: user,
};

export default sheet;
