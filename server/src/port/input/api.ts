import express from "express";

export interface ApiBuilderOptions {}

const ApiBuilder = (options: ApiBuilderOptions): express.Router => {
  const router: express.Router = express.Router();
  const silenceIsGolden = { message: "API" };

  router
    .get(
      "/",
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log("body: ", req.body);

        res.json(silenceIsGolden);
      }
    )
    .post(
      "/",
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.json({ options, message: { method: "post" } });
      }
    );

  return router;
};

const Api = (options: ApiBuilderOptions) => ApiBuilder(options);

export default Api;
