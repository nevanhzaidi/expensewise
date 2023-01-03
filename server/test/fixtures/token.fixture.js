import moment from "moment";
import config from "../../config/config";
import { user } from "./user.fixture";

const accessTokenExpires = moment().add(
  config.jwt.accessExpirationMinutes,
  "minutes",
);
const userOneAccessToken = tokenService.generateToken(
  userOne._id,
  accessTokenExpires,
  tokenTypes.ACCESS,
);
// const adminAccessToken = tokenService.generateToken(
//   admin._id,
//   accessTokenExpires,
//   tokenTypes.ACCESS,
// );

export { userOneAccessToken };
