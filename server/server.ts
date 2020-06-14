import { iServerConfig } from "./src/infrastructure/server-config.js";
import * as path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { serverListener } from "./src/infrastructure/server-listener";
import WebApp from "./src/port/output/web-app";
import Debugger from "./src/port/output/debug";

const startServer = (serverConfig: iServerConfig) => {
  try {
    /**
     * Boilerplate
     */
    const app: express.Application = express();
    app.use(bodyParser.json());
    app.use(cors());

    /**
     * Routes
     */
    app.use(
      "/",
      WebApp({ path: serverConfig.path + "/" + serverConfig.webapp })
    );

    app.use("/debug", Debugger(serverConfig));

    /**
     * Listen
     */
    app.listen(serverConfig.port, () =>
      serverListener({
        port: 3000,
        paths: ["/", "/api"]
      })
    );
  } catch (e) {
    throw new Error("--= Failed to initialize =--");
  }
};

startServer({
  path: path.resolve(__dirname),
  webapp: "../public",
  port: 3000,
  index: "/api",
  default_message: "Typescript Fundamentals Server"
});
