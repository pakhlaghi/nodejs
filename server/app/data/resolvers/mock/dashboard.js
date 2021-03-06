  const getDashboard = () => {
    const defaultModules = [
        {
          id: 1,
          visible: true,
          icon: "CreditCardIcon",
          name: "Header",
          type: "CHeader",
          contents: {
            isFullHeader: true,
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
            },
            title: "Header Content",
            subTitle: `Regardless of whether you are a photography industry professional or
              just a newcomer hobbyist, editing and post-processing your pics on
              the go is now so much easier!`,
            buttons: {
              primary: {
                text: "Primary",
                url: "#Primary"
              },
              secondary: {
                text: "Secondary",
                url: "#Secondary"
              }
            }
          }
        },
        {
          id: 2,
          visible: true,
          icon: "FormatAlignCenterIcon",
          name: "Text & Title",
          type: "CTitleText",
          contents: {
            color: "#444",
            background: null,
            title: {
              text: "GET OUR APP AND TURN EVERY PHOTO",
              isVisible: true,
              align: "center",
              color: "red"
            },
            subTitle: {
              text: "You Take Into a Masterpiece!",
              isVisible: true,
              align: "center",
              color: "blue"
            },
            line: {
              isVisible: true,
              align: "center",
              width: null,
              color: "purple"
            },
            body: {
              text: `Despite all the intuitiveness of interface and easy-to-understand UX
                        and UI, an application as complex as ours can get you bumping into
                        some roadblocks or asking some technical questions over time. We can
                        assure you, that while our Customer Support dept. will be ready to
                        help you 24/7, we have also placed all the most frequently asked
                        questions and issues on this page…`,
              isVisible: true,
              align: "right",
              color: "orange"
            },
            readMore: {
              text: "Read More",
              url: "#",
              isVisible: true,
              align: "right",
              color: "green"
            }
          }
        },
        {
          id: 3,
          visible: true,
          icon: "ArtTrackIcon",
          name: "Image & Text",
          type: "CImageText",
          contents: {
            background:
              "linear-gradient(0deg, rgba(253,29,78,1) 0%, rgba(175,56,13,0.9917717086834734) 100%)",
            contentWidth: "80%",
            image: {
              isVisible: true,
              position: "right",
              align: "end",
              width: "20%",
              url:
                "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg5.png",
              title: "mobile"
            },
    
            title: {
              text: "GET OUR APP AND TURN EVERY PHOTO",
              isVisible: true,
              align: "center",
              color: "red"
            },
            subTitle: {
              text: "You Take Into a Masterpiece!",
              isVisible: true,
              align: "center",
              color: "blue"
            },
            line: {
              isVisible: true,
              align: "center",
              width: null,
              color: "purple"
            },
            body: {
              text: `Despite all the intuitiveness of interface and easy-to-understand UX
                        and UI, an application as complex as ours can get you bumping into
                        some roadblocks or asking some technical questions over time. We can
                        assure you, that while our Customer Support dept. will be ready to
                        help you 24/7, we have also placed all the most frequently asked
                        questions and issues on this page…`,
              isVisible: true,
              align: "right",
              color: "orange"
            },
            readMore: {
              text: "Read More",
              url: "#",
              isVisible: true,
              align: "right",
              color: "green"
            }
          }
        },
        {
          id: 4,
          visible: true,
          icon: "AppsIcon",
          name: "Image Tiles",
          type: "CImageTile",
          contents: {
            columnNumber: 5,
            tiles: [
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg",
                linkUrl: "Link Url",
                title: "Image",
                subTitle: "subTitle",
                details: "details",
                textColor: "#f4f4f4"
              },
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img2.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
              },
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img3.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
              },
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img4.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
              },
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img5.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
              },
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img6.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
              }
            ]
          }
        },
        {
          id: 5,
          visible: true,
          icon: "MoreHorizIcon",
          name: "Icon & Text",
          type: "CIconTitleText",
          contents: {
            backgroundColor: "#fff",
            containerColor: "#000",
            tiles: [
              {
                id: 1,
                icon: "Gamepad",
                title: "GET OUR APP AND TURN EVERY PHOTO",
                url: "#",
                text: "You Take Into a Masterpiece!",
                align: "right",
                color: "#fff"
              },
              {
                id: 2,
                icon: "Folder",
                title: "GET OUR APP AND TURN EVERY PHOTO",
                text: "You Take Into a Masterpiece!"
              },
              {
                id: 3,
                icon: "TabletMac",
                title: "GET OUR APP AND TURN EVERY PHOTO",
                text: "You Take Into a Masterpiece!"
              }
            ]
          }
        },
        {
          id: 6,
          visible: true,
          icon: "VideoLabelIcon",
          name: "Footer",
          type: "CFooter",
          contents: {
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
        }
      ];
    const drawerItems = [
        {
          text: "Dashboard",
          action: "main",
          icon: "DashboardIcon",
          children: []
        },
        {
          text: "Menu",
          action: "menu",
          icon: "MenuIcon",
          children: []
        },
        {
          text: "Pages",
          action: "pages",
          icon: "WebIcon",
          children: []
        },
        {
          text: "Media",
          action: "media",
          icon: "PhotoIcon",
          children: []
        },
        {
          text: "Setting",
          action: "setting",
          icon: "SettingsIcon",
          children: []
        }
      ];
        
    const data = {
        defaultModules: JSON.stringify(defaultModules),
        drawerItems: JSON.stringify(drawerItems)
    };
    
    return data;
}

module.exports = { getDashboard }
