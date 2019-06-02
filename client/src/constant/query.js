const getPage = id => `{
    getPage(id: ${id})
  }`;

const layoutContent = `{
    getLayout
  }`;

  const dashboardItems = `{
    getDashboard {
      drawerItems
    }
  }`;

  const dashboardDefaultModules = `{
    getDashboard {
      defaultModules
    }
  }`;

export const query = {
  getPage,
  layoutContent,
  dashboardItems,
  dashboardDefaultModules
};
