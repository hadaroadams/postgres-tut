const { assert } = require("console");
const express = require("express");
// const { pool } = require("./configdbconn");
// const { connect } = require("http2");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    // await client.connect();
    const user = await prisma.user.findUnique({ where: { id: 1 } });
    console.log(user);
    res.json(user);
  } catch (err) {
    console.log(err);
  } finally {
    // await client.end();
    console.log("Disconnect from the database");
  }
});

app.get("car", async (req, res) => {
  try {
    const user = prisma.car.create({data:{}})
  } catch (err) {}
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
