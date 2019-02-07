import { config } from "./../constant/config";
import { query } from "./../constant/query";
import { mockData } from "./../test/mock/mockData";
import axios from "axios";

const isDevelopment =
  process.env.NODE_ENV && process.env.NODE_ENV === "development";

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
    axios
      .post(config.api.gqUrl, {
        query: query.contentById(id)
      })
      .then(res => JSON.parse(res.data.data.contentById))
      .catch(logError);
  }
};

const login = data => {
  if (isDevelopment) {
    // development code
    return mockPromise(mockData.login);
  } else {
    return axios
      .post(config.api.loginUrl, data)
      .then(res => {
        return res.data;
      })
      .catch(logError);
  }
};

const getDashboardContent = () => {
  if (isDevelopment) {
    // development code
    return mockPromise(mockData.dashboard);
  } else {
    // production code
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardContent
      })
      .then(res => res.data.data.content)
      .catch(logError);
  }
};

const getDefaultModules = () => {
  if (isDevelopment) {
    // development code
    return mockPromise(mockData.dashboard.defaultModules);
  } else {
    // production code
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardContent
      })
      .then(res => res.data.data.content)
      .catch(logError);
  }
};

const getPageModules = id => {
  if (isDevelopment) {
    // development code
    return mockPromise(mockData.page(id));
  } else {
    // production code
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardContent
      })
      .then(res => res.data.data.content)
      .catch(logError);
  }
};

const savePage = data => {
  if (isDevelopment) {
    // development code
    return mockPromise({ message: "success" });
  } else {
    // production code
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardContent
      })
      .then(res => res.data.data.content)
      .catch(logError);
  }
};

export const dataService = {
  getPageModules,
  savePage,
  getLayoutContent,
  getHomeContent,
  getDashboardContent,
  getDefaultModules,
  login
};
