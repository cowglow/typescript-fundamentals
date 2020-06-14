import express from "express";

export interface WebAppBuilderOptions {
  path: string;
}

const WebAppBuilder = (options: WebAppBuilderOptions): express.Router => {
  const router: express.Router = express.Router();

  router.use("/", express.static(options.path));

  return router;
};

const WebApp = (params: WebAppBuilderOptions) => WebAppBuilder(params);

export default WebApp;
