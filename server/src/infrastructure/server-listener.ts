export interface ServerListenerInput {
  port: number;
  paths: ["/", "/api"];
  mode?: "http" | "https";
  uri?: string;
}

export const serverListener = ({
  port,
  paths,
  mode = "http",
  uri = "localhost"
}: ServerListenerInput) => {
  const message = "server listening at ";
  const url = mode + "://" + uri + ":" + port;

  paths.forEach(path => {
    return console.log(message + " " + url + path);
  });
};
