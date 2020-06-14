import express from "express";
import { iServerConfig } from "../../infrastructure/server-config";

type DebuggerOptions = iServerConfig;

const DebuggerBuilder = (options: DebuggerOptions): express.Router => {
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

const Debugger = (options: DebuggerOptions) => DebuggerBuilder(options);

export default Debugger;
