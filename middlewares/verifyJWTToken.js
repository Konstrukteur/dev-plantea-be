import Jwt from "jsonwebtoken";
import * as User from "../models/User.js";

// # Configure Environment Variables
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const verifyJWTToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    // console.log("authorization", authorization);

    if (!authorization) return res.status(401).json({ error: "Please login" });

    const token = authorization.split(" ")[1];
    // console.log("token", token);

    const { id } = Jwt.verify(token, process.env.EXPRESSJS_JWT_SECRET);

    const user = await AuthUser.findById(id);
    if (!user) return next("User does not exist");

    req.user = user;

    next();
  } catch (err) {
    return next(err);
  }
};

export default verifyJWTToken;
