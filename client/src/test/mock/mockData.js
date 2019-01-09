import { config, loginMockType } from "./mockConfig";

const layout = {
  headerContent: {
    topBar: {
      title: "Code Core",
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

const home = id => {
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
              { id: 4, to: "/dashboard/main", title: "Dashboard" }
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

  return data;
};

const getMockLogin = () => {
  switch (config.login) {
    case loginMockType.success:
      return {
        token: "token"
      };

    default:
      return null;
  }
};

const login = getMockLogin();

export const mockData = {
  layout: layout,
  home: home,
  login: login
};
