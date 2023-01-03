// eslint-disable-next-line node/no-unpublished-import
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../../models/User";

const password = "Admin123";
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const user = {
  _id: mongoose.Types.ObjectId(),
  firstName: faker.lorem.word(20),
  lastName: faker.lorem.word(20),
  email: faker.internet.email().toLowerCase(),
  password,
};

const insertUsers = async (users) => {
  await User.insertMany(
    users.map((user) => ({ ...user, password: hashedPassword })),
  );
};

export { user, insertUsers };
