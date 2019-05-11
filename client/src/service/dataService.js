import { config } from "./../constant/config";
import { query } from "./../constant/query";
import { mockData } from "./../test/mock/mockData";
import { isDevelopment } from "./../utility/utility";
import axios from "axios";

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

const getHomeContent = (id) => {
    return axios
      .post(config.api.gqUrl, {
        query: query.getPage(id !== "" ? id : 0)
      })
      .then(res => JSON.parse(res.data.data.getPage))
      .catch(logError);
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

const savePage = (id, title, action, modules) => {
  if (isDevelopment) {
    // development code
    return mockPromise({ id: id });
  } else {
    // production code
    // ToDO: modified the call
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardContent,
        data: dataObj
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
