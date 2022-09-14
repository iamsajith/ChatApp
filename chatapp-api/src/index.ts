import "dotenv/config";
import cors from "cors";
import express from "express";
// import routes from "./routes";
import connect from "./utils/connect";
import { RedisStore, client } from "./api/auth/services/auth.services";
import session from "express-session";
import { SESSION_OPTIONS } from "./config/session";

const app = express();
app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(session({
  ...SESSION_OPTIONS,
  store: new RedisStore({ client })
}))

const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Running Node with Express and Typescript",
  });
});
app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}.`);
  await connect();
  // routes(app);
});

