const contentById = id => `{
    contentById(id: "${id}")
  }`;

const layoutContent = `{
    content {
      headerContent {
        topBar {
          title
          menuItems {
            id
            to
            title
          }
          drawerPosition
        }
      }
      footerContent {
        text
        style {
          color
          backgroundColor
        }
        socialData {
          id
          icon
          url
        }
      }
    }
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
  contentById,
  layoutContent,
  dashboardContent
};
