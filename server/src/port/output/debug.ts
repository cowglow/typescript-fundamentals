import express from "express";
import { iServerConfig } from "../../infrastructure/server-config";

type DebuggerOptions = iServerConfig;

const Debugger = (options: DebuggerOptions): express.Router => {
  const router: express.Router = express.Router();

  router.use(
    "/",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.json(options);
    }
  );

  return router;
};

export default Debugger;
