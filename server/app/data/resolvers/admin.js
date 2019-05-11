const { protected } = require('../../utils');

const dashboardMenu = (_, args) => {
const data = {
    draweritems: [
    {
        id: 1,
        text: "Dashboard",
        action: "main",
        icon: "DashboardIcon",
        children: []
    },
    {
        id: 2,
        text: "Menu",
        action: "menu",
        icon: "MenuIcon",
        children: []
    },
    {
        id: 3,
        text: "Pages",
        action: "pages",
        icon: "WebIcon",
        children: []
    },
    {
        id: 4,
        text: "Media",
        action: "media",
        icon: "PhotoIcon",
        children: []
    },
    {
        id: 5,
        text: "Setting",
        action: "setting",
        icon: "SettingsIcon",
        children: []
    }
    ]
};
return JSON.stringify(data);
};

module.exports = {
  dashboardMenu
}