import { iServerConfig } from "./src/infrastructure/server-config.js";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { serverListener } from "./src/infrastructure/server-listener";
import { WebApp } from "./src/port/output/web-app";

async function startServer() {
  try {
    const serverConfig: iServerConfig = {
      webapp: "../../../../../public",
      port: 3000,
      index: "/api",
      default_message: "Typescript Fundamentals Server"
    };

    const app: express.Application = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use(
      "/",
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.json({ message: serverConfig.default_message });
      }
    );

    app.use(
      "/web-app",
      WebApp({
        path: serverConfig.webapp
      })
    );

    // app.use("/api", Api());

    app.listen(serverConfig.port, () =>
      serverListener({
        port: 3000,
        paths: ["/", "/api"]
      })
    );
  } catch (e) {
    throw new Error("--= Failed to initialize =--");
  }
}

startServer();
