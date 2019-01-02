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
      title: "Code Core",
      menuItems: [
        { id: 1, to: "/home", title: "Home" },
        { id: 2, to: "/login", title: "Login" },
        { id: 3, to: "/dashboard", title: "Dashboard" }
      ],
      drawerPosition: "right"
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
  type tHeader {
    title: String
    menuItems: [tMenuItem],
    drawerPosition: String
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
  type Query {
    items: [tItem]!,
    content: tContent
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
