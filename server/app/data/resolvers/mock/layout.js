const getLayout = () => {
    const data = {
        headerContent: {
            isFullHeader: false,
            color: "#ffffff",
            background: {
                image:
                    "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg-1.jpg",
                height: "65px"
            },
            topBar: {
                title: "Code Core",
                menuId: 1,
                menuItems: [
                    { id: 1, to: "/page/home", title: "Home" },
                    { id: 2, to: "/page/aboutus", title: "About Us" },
                    { id: 3, to: "/login", title: "Login" },
                    { id: 4, to: "/dashboard/main", title: "Dashboard" }
                ],
                drawerPosition: "right"
            }
        },
        footerContent: {
            text: "Code Core Co. © 2018. Privacy Policy | Terms Of Use",
            term: {
                text: "Terms Of Use",
                url: "#Term"
            },

            style: {
                color: "#fff",
                backgroundColor: "#263238"
            },
            socialData: [
                {
                    id: 1,
                    icon: "TabletMac",
                    url: "http://www.google.com"
                },
                {
                    id: 2,
                    icon: "TabletMac",
                    url: "http://www.google.com"
                },
                {
                    id: 3,
                    icon: "TabletMac",
                    url: "http://www.google.com"
                }
            ]
        }
    };
    return JSON.stringify(data);
}

// TODO: sql view can be added
const saveLayout = ({ content }) => {
    console.log(content);
    return "4";
}

module.exports = {
    getLayout,
    saveLayout
}