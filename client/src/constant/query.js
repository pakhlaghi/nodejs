const getPage = id => `{
    getPage(id: ${id})
  }`;

const layoutContent = `{
    getLayout
  }`;

  const dashboardContent = `{
    dashboardContent {
      drawerItems {
        text
        action
        icon
      children: {
        text
        action
        icon
      }
    }
    }
  }`;

export const query = {
  getPage,
  layoutContent,
  dashboardContent
};
