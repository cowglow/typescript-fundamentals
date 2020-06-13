import {
  WebAppBuilder as buildMakeWebApp,
  WebAppBuilderOptions
} from "./web-app.code";

export const WebApp = (params: WebAppBuilderOptions) => buildMakeWebApp(params);
