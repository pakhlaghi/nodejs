import { config } from "./../constant/config";
import { query } from "./../constant/query";
import { apiService } from './apiService';

const getLayoutContent = () => {
  return apiService
    .gqPost({ query: query.layoutContent })
    .then(res => JSON.parse(res.getLayout));
};

const getHomeContent = (id) => {
  return apiService
    .gqPost({ query: query.getPage(id !== "" ? id : 0) })
    .then(res => JSON.parse(res.getPage));
};

const login = data => {
  return apiService
    .post(config.api.loginUrl, data)
    .then(res => {
      return res.data;
    });
};

const getDashboardItems = () => {
  return apiService
    .gqPost({ query: query.dashboardItems })
    .then(res => JSON.parse(res.getDashboard.drawerItems));
};

const getDefaultModules = () => {
  return apiService
    .gqPost({ query: query.dashboardDefaultModules })
    .then(res => JSON.parse(res.getDashboard.defaultModules));
};

const getPageModules = id => {
  return apiService
    .gqPost({ query: query.getPage(id !== "" ? id : 0) })
    .then(res => JSON.parse(res.getPage));
};

// TODO: add save page logic
const savePage = (id, title, action, modules) => {
  return apiService
    .gqPost({ query: query.dashboardContent, data: dataObj })
    .then(res => res.content);
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
