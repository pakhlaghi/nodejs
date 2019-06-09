import { config } from "./../constant/config";
import { query } from "./../constant/query";
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
    return axios
      .post(config.api.gqUrl, {
        query: query.layoutContent
      })
      .then(res => JSON.parse(res.data.data.getLayout))
      .catch(logError);
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
  return axios
    .post(config.api.loginUrl, data)
    .then(res => {
      return res.data;
    })
    .catch(logError);
};

const getDashboardItems = () => {
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardItems
      })
      .then(res => JSON.parse(res.data.data.getDashboard.drawerItems))
      .catch(logError);
};

const getDefaultModules = () => {
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardDefaultModules
      })
      .then(res => JSON.parse(res.data.data.getDashboard.defaultModules))
      .catch(logError);
};

const getPageModules = id => {
    return axios
      .post(config.api.gqUrl, {
        query: query.getPage(id !== "" ? id : 0)
      })
      .then(res => JSON.parse(res.data.data.getPage))
      .catch(logError);
};

// TODO: add save page logic
const savePage = (id, title, action, modules) => {
    return axios
      .post(config.api.gqUrl, {
        query: query.dashboardContent,
        data: dataObj
      })
      .then(res => res.data.data.content)
      .catch(logError);
};

export const dataService = {
  getPageModules,
  savePage,
  getLayoutContent,
  getHomeContent,
  getDashboardItems,
  getDefaultModules,
  login
};
