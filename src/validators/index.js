import { body } from "express-validator";

export const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is reuired")
      .isEmail()
      .withMessage("Invalid email"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .toLowerCase()
      .withMessage("Username should be in lowercase")
      .isLength({ min: 3, max: 10 })
      .withMessage("length should be minimun of 3 and maximum of 10"),
    body("password").trim().notEmpty().withMessage("Password is required"),
    body("fullName").optional().trim(),
  ];
};
