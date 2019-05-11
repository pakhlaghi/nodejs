const items = (_, args) => {
  const itemData = JSON.stringify({
      "draweritems": [
        { id: 1, text: "Dashboard", action: "main", icon: "DashboardIcon", children: [] },
        { id: 2, text: "Menu", action: "menu", icon: "MenuIcon", children: [] },
        { id: 3, text: "Pages", action: "pages", icon: "WebIcon", children: [] },
        { id: 4, text: "Media", action: "media", icon: "PhotoIcon", children: [] },
        { id: 5, text: "Setting", action: "setting", icon: "SettingsIcon", children: [] }]
    });

  const data = [{
    id: 2,
    data: `${itemData}`
  }]
  return JSON.stringify(data);
}

module.exports = {
  items
}