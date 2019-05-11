import { isDevelopment } from "./../utility/utility";

const serverPort = "5400";

export const config = {
  api: {
    loginUrl: "/v1/login",
    gqUrl: isDevelopment ? `http://localhost:${serverPort}/v1/gq` : "/v1/gq"
  }
};
