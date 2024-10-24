import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signup successful");
});

router.get("/login", (req, res) => {
  res.send("login successful");
});

router.get("/logout", (req, res) => {
  res.send("logout successful");
});

export default router;
