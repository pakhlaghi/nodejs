const query = require('./query');
const crypto = require("crypto");

// Root provides a resolver function for each API endpoint
let resolvers = {
    items: (_, args) => {
      // args.roles = ["admin"]; // array of authorization
      // protected(args); // contain user and response, user = args.user comes from context
      return query.selectAll("items");
    },
    content: (_, args) => {
      return getContent();
    },
    dashboardContent: (_, args) => {
      return getDashboardContent();
    },
    contentById: ({ id }, args) => {
      return query.selectById('contents', id);
    },
    // Users
    updateUser({ id, email }, args) {
      console.log(args.user);
      return updateUser(id, email);
    },
    saveUser({ email, password }) {
      return insertUser(email, password);
    },
    deleteUser({ id }) {
        return query.deleteById("users", id);
    },
    trashUser({ ids }) {
        return query.trashByIds("users", ids);
    },
    // Pages
    savePage({id, title, action, modules, main_page}) {
        return savePage(id, title, action, modules, main_page);
    },
    trashPage({ ids }) {
        return query.trashByIds("pages", ids);
    },
  };

  const protected = ({ user, res, roles }) => {
    let isAuthorized = true;
  
    if (!user) {
      isAuthorized = false;
    } else if (roles) {
      isAuthorized = roles.some(role => {
        return user.role.indexOf(role) >= 0;
      });
  
      if (!isAuthorized) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }
    }
  };
  
  const getContent = _ => {
    const data = {
      headerContent: {
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
  };
  
  const getDashboardContent = _ => {
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
  
  const getContentById = id => {
    let data = [];
  
    if (id == "home" || id == "") {
      data = [
        {
          id: 6,
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
          id: 1,
          type: "CTitleText",
          contents: {
            title: {
              text: "GET OUR APP AND TURN EVERY PHOTO",
              isVisible: true,
              align: "center",
              color: "#000"
            },
            subTitle: {
              text: "You Take Into a Masterpiece!",
              isVisible: true,
              align: "center",
              color: "#000"
            },
            line: {
              isVisible: true,
              align: "center"
            },
            body: {
              text: `Despite all the intuitiveness of interface and easy-to-understand UX
                      and UI, an application as complex as ours can get you bumping into
                      some roadblocks or asking some technical questions over time. We can
                      assure you, that while our Customer Support dept. will be ready to
                      help you 24/7, we have also placed all the most frequently asked
                      questions and issues on this page…`,
              isVisible: true,
              align: "center",
              color: "#000"
            },
            readMore: {
              text: "Read More",
              url: "#",
              isVisible: true,
              align: "center",
              color: "#000"
            }
          }
        },
        {
          id: 2,
          type: "CImageText",
          contents: {
            image: {
              url:
                "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg5.png",
              title: "mobile"
            },
            title: "EDIT PHOTOS on the Go Peyman!",
            subtitle: `Our app has the most essential editing features, allowing you to
                enhance all the pictures you’ve taken on the go!`,
            body: `As a team of professional photographers who were all young enough to
                remember working with the Photoshop V 1.0, we were always on the
                verge of cutting-edge photos post-processing technologies.`,
            readMore: {
              text: "Read More",
              url: "#"
            }
          }
        },
        {
          id: 3,
          type: "CImageTile",
          contents: {
            columnNumber: 3,
            tiles: [
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
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
          id: 4,
          type: "CIconTitleText",
          contents: {
            backgroundColor: "#fff",
            containerColor: "#fff",
            tiles: [
              {
                id: 1,
                icon: "Gamepad",
                title: "GET OUR APP AND TURN EVERY PHOTO",
                text: "You Take Into a Masterpiece!"
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
          id: 5,
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
    } else {
      data = [
        {
          id: 6,
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
            }
          }
        },
        {
          id: 1,
          type: "CTitleText",
          contents: {
            title: {
              text: "GET OUR APP AND TURN EVERY PHOTO",
              isVisible: true,
              align: "center",
              color: "#000"
            },
            subTitle: {
              text: "You Take Into a Masterpiece!",
              isVisible: true,
              align: "center",
              color: "#000"
            },
            line: {
              isVisible: true,
              align: "center"
            },
            body: {
              text: `Despite all the intuitiveness of interface and easy-to-understand UX
                      and UI, an application as complex as ours can get you bumping into
                      some roadblocks or asking some technical questions over time. We can
                      assure you, that while our Customer Support dept. will be ready to
                      help you 24/7, we have also placed all the most frequently asked
                      questions and issues on this page…`,
              isVisible: true,
              align: "center",
              color: "#000"
            },
            readMore: {
              text: "Read More",
              url: "#",
              isVisible: true,
              align: "center",
              color: "#000"
            }
          }
        },
        {
          id: 3,
          type: "CImageTile",
          contents: {
            columnNumber: 3,
            tiles: [
              {
                imageUrl:
                  "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg",
                title: "Image",
                subTitle: "subTitle",
                details: "details"
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
          id: 4,
          type: "CIconTitleText",
          contents: {
            backgroundColor: "#fff",
            containerColor: "#fff",
            tiles: [
              {
                id: 1,
                icon: "Gamepad",
                title: "GET OUR APP AND TURN EVERY PHOTO",
                text: "You Take Into a Masterpiece!"
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
        }
      ];
    }
  
    return JSON.stringify(data);
  };
  
  // User
  const updateUser = (id, email) => {
    const updateObj = {email};

    // return query.updateByCondition("users", updateObj, `id = ${id}`);
    return query.updateByCondition("users", updateObj, id);
  };
  
  const insertUser = (email, password) => {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 512, "sha512")
      .toString("hex");
  
      const insertObj = {email, hash, salt};

    return query.insert("users", insertObj);
  };

  // Page
const savePage = (id, title, action, modules, main_page) => {
  // all main_page = false
  main_page && resetMainPage();
  
  return id > 0 ? updatePage(id, title, action, modules, main_page) : insertPage(title, action, modules, main_page)
}
const resetMainPage = () => {
   query.updateByCondition("pages", {main_page: false});
}

const insertPage = (title, action, modules, main_page) => {
    return query.insert("pages", {title, action, modules, main_page});
}

const updatePage = (id, title, action, modules, main_page) => {
    return query.updateById("pages", {title, action, modules, main_page}, id);
}

module.exports = resolvers;