import express from "express";
import dotenv from "dotenv";
// import connectDatabase from "./config/MongoDb.js";
// import connectMysql from "./config/MysqlDB.js";
import userRouter from "./routes/usersRouter.js";
import postRouter from "./routes/postRouter.js";
import commentRouter from "./routes/commentRouter.js"
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import cookieParser  from "cookie-parser";


dotenv.config();
// connectMysql()
//   .then((value) => {
//     startServer();
//   })
//   .catch((err) => {
//   console.log(err.message);
//     process.exit(1);s
//   });

  // connectMysql()
  const app = express();
  const PORT = process.env.PORT || 3000;
  app.use(cors());
  app.use(morgan('dev'))
  //config cookie-pareser
  app.use(cookieParser())
  //API
  app.use(bodyParser.json());
  app.use("/api/user", userRouter);
  app.use("/api/blog",postRouter)
  app.use("/api/comment",commentRouter)
  app.get("/", (req, res) => {
    res.send("API is runing");
  });
  app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT}`);
  });


