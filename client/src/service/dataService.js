import { config } from "./../constant/config";
import { query } from "./../constant/query";
import { mockData } from "./../test/mock/mockData";
import axios from "axios";

const isDevelopment = !process.env.mode || process.env.mode === "development";

// create promise from mock data
const mockPromise = data => {
  const promise = new Promise(resolve => {
    resolve(data);
  });
  return promise;
};

// log
const logError = err => {
  console.error("global catch: " + err);
};

const getLayoutContent = () => {
  if (isDevelopment) {
    // development code
    return mockPromise(mockData.layout);
  } else {
    // production code
    return axios
      .post(config.api.gqUrl, {
        query: query.layoutContent
      })
      .then(res => res.data.data.content)
      .catch(logError);
  }
};

const getHomeContent = id => {
  if (isDevelopment) {
    // development code
    return mockPromise(mockData.home(id));
  } else {
    dispatch(showSpinner(true));

    axios
      .post(config.api.gqUrl, {
        query: query.contentById(id)
      })
      .then(res => JSON.parse(res.data.data.contentById))
      .catch(logError);
  }
};

export const dataService = {
  getLayoutContent,
  getHomeContent
};