const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

// import modules
const db = require("./dbProvider");

const getItems = _ => {
  return db.manyOrNone("SELECT * FROM items;");
};

const getContent = _ => {
  const data = {
    headerContent: {
      topBar: {
        title: "Code Core",
        menuItems: [
          { id: 1, to: "/page/home", title: "Home" },
          { id: 2, to: "/page/aboutus", title: "About Us" },
          { id: 3, to: "/login", title: "Login" },
          { id: 4, to: "/dashboard", title: "Dashboard" }
        ],
        drawerPosition: "right"
      }
    },
    footerContent: {
      text: "Code Core Co. © 2018. Privacy Policy | Terms Of Use",
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
  return data;
};

const getDashboardContent = _ => {
  const data = {
    draweritems: [
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
    ]
  };
  return data;
};
const getContentById = id => {
  let data = [];

  if (id == "home" || id == "") {
    data = [
      {
        id: 6,
        type: "CHeader",
        contents: {
          topBar: {
            title: "Code Core",
            menuItems: [
              { id: 1, to: "/page/home", title: "Home" },
              { id: 2, to: "/page/aboutus", title: "About Us" },
              { id: 3, to: "/login", title: "Login" },
              { id: 4, to: "/dashboard", title: "Dashboard" }
            ],
            drawerPosition: "right"
          },
          title: "Header Content",
          subTitle: `Regardless of whether you are a photography industry professional or
          just a newcomer hobbyist, editing and post-processing your pics on
          the go is now so much easier!`,
          buttons: {
            primary: {
              title: "Primary",
              url: "#Primary"
            },
            secondary: {
              title: "Secondary",
              url: "#Secondary"
            }
          }
        }
      },
      {
        id: 1,
        type: "CCenterTitleText",
        contents: {
          title: "GET OUR APP AND TURN EVERY PHOTO",
          subTitle: "You Take Into a Masterpiece!",
          body: `Despite all the intuitiveness of interface and easy-to-understand UX
                  and UI, an application as complex as ours can get you bumping into
                  some roadblocks or asking some technical questions over time. We can
                  assure you, that while our Customer Support dept. will be ready to
                  help you 24/7, we have also placed all the most frequently asked
                  questions and issues on this page…`,
          readMore: {
            text: "Read More",
            url: "#"
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
        contents: [
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img2.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img3.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img4.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img5.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img6.jpg",
            title: "Image",
            author: "author"
          }
        ]
      },
      {
        id: 4,
        type: "CIconTitleText",
        contents: [
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
      },
      {
        id: 5,
        type: "CFooter",
        contents: {
          text: "Code Core Co. © 2018. Privacy Policy | Terms Of Use",
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
          topBar: {
            title: "Code Core About Us",
            menuItems: [
              { id: 1, to: "/page/home", title: "Home" },
              { id: 2, to: "/page/aboutus", title: "About Us" },
              { id: 3, to: "/login", title: "Login" },
              { id: 4, to: "/dashboard", title: "Dashboard" }
            ],
            drawerPosition: "right"
          }
        }
      },
      {
        id: 1,
        type: "CCenterTitleText",
        contents: {
          title: "GET OUR APP AND TURN EVERY PHOTO",
          subTitle: "You Take Into a Masterpiece!",
          body: `Despite all the intuitiveness of interface and easy-to-understand UX
                  and UI, an application as complex as ours can get you bumping into
                  some roadblocks or asking some technical questions over time. We can
                  assure you, that while our Customer Support dept. will be ready to
                  help you 24/7, we have also placed all the most frequently asked
                  questions and issues on this page…`,
          readMore: {
            text: "Read More",
            url: "#"
          }
        }
      },
      {
        id: 3,
        type: "CImageTile",
        contents: [
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img2.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img3.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img4.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img5.jpg",
            title: "Image",
            author: "author"
          },
          {
            img:
              "https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img6.jpg",
            title: "Image",
            author: "author"
          }
        ]
      },
      {
        id: 4,
        type: "CIconTitleText",
        contents: [
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
    ];
  }

  return JSON.stringify(data);
};

const updateItem = (id, title) => {
  return db
    .oneOrNone(`update items set title='${title}' where id = ${id};`)
    .then(user => {
      return "Updated";
    })
    .catch(er => {
      return er;
    });
};

const insertUser = (email, password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex");

  return db
    .oneOrNone(
      `insert into users (email, hash, salt) values ('${email}', '${hash}', '${salt}') RETURNING id`
    )
    .then(user => {
      return user.id;
    })
    .catch(er => {
      return er;
    });
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
// End GQ BL

// Start GQ
let schema = buildSchema(`
  type tItem {
    id: Int!
    title: String
    parentId: Int
  },
  type tMenuItem {
    id: Int, 
    to: String, 
    title: String
  },
  type tSocial {
    id: Int,
    icon: String,
    url: String
  },
  type tTopBar {
    title: String
    menuItems: [tMenuItem],
    drawerPosition: String
  },
  type tHeader {
   topBar: tTopBar
  },
  type tStyle {
    color: String,
    backgroundColor: String
  },
  type tFooter {
      text: String,
      style: tStyle,
      socialData: [tSocial]
  },
  type tContent {
    headerContent: tHeader,
    footerContent: tFooter
  },
  type tDrawerItem {
    text: String,
    action: String,
    icon: String,
    children: []
  },
  type tDashboardContent {
    drawerItems: [tDrawerItem]
  },
  type Query {
    items: [tItem]!,
    content: tContent,
    dashboardContent: tDashboardContent,
    contentById(id: String): String
  },
  type Mutation {
    updateItem(id: Int, title: String): String,
    saveUser(email: String, password: String): String
  }
   `);

// Root provides a resolver function for each API endpoint
let rootResolver = {
  items: (_, args) => {
    args.roles = ["admin"]; // array of authorization
    protected(args); // contain user and response, user = args.user comes from context
    return getItems();
  },
  content: (_, args) => {
    return getContent();
  },
  dashboardContent: (_, args) => {
    return getDashboardContent();
  },
  contentById: ({ id }, args) => {
    return getContentById(id);
  },
  updateItem({ id, title }, args) {
    console.log(args.user);
    return updateItem(id, title);
  },
  saveUser({ email, password }) {
    return insertUser(email, password);
  }
};

const qraphqlObj = graphqlHTTP((req, res) => ({
  schema: schema,
  context: { user: req.decodedToken, res: res },
  rootValue: rootResolver,
  graphiql: true //Set to false if you don't want graphiql enabled
}));

module.exports = qraphqlObj;
