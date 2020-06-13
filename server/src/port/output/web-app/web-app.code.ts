import express from "express";

export interface WebAppBuilderOptions {
  path: string;
}

export const WebAppBuilder = ({
  path
}: WebAppBuilderOptions): express.Router => {
  const router: express.Router = express.Router();

  router.use("/", (a, b, c) => {
    b.json({ message: "web-app!", path });
  });
  // router.use("/working", express.static(staticPath));

  return router;
};
