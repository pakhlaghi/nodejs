import { isDevelopment } from "./../utility/utility";

const baseUrl = isDevelopment ? `http://localhost:5400` : "" ;

export const config = {
  api: {
    loginUrl: `${baseUrl}/v1/login`,
    gqUrl: `${baseUrl}/v1/gq`
  }
};
