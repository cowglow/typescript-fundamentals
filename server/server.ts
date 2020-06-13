import { iServerConfig } from "./src/infrastructure/server-config.js";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { serverListener } from "./src/infrastructure/server-listener";

async function startServer() {
  try {
    const app: express.Application = express();
    const serverConfig: iServerConfig = {
      webapp: "../public",
      port: 3000,
      index: "/api"
    };

    app.use(bodyParser.json());
    app.use(cors());

    app.use(
      "/",
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.json({ message: "Typescript Fundamentals Server" });
      }
    );
    // app.use("/", WebApp());
    // app.use("/api", Api());

    app.listen(
      serverConfig.port,
      serverListener({
        port: 9000,
        paths: ["/", "/api"]
      })
    );
  } catch (e) {
    throw new Error("--= Failed to initialize =--");
  }
}

startServer();
