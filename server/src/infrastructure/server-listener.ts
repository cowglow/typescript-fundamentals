export interface ServerListenerInput {
  mode?: "http" | "https";
  uri?: string;
  port: number;
  paths: ["/", "/api"];
}

export const serverListener = ({
  mode = "http",
  uri = "localhost",
  port,
  paths
}: ServerListenerInput) => {
  const message = "server listening at ";
  const url = mode + "://" + uri + ":" + port;

  paths.forEach(path => {
    console.log(message + " " + url + path);
  });

  // return Object.freeze({ message, url });
};
