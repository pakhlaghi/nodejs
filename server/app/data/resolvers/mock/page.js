const savePage = ({ id, title, action, modules, main_page }) => {
    return "4";
}

const trashPage = ({ ids }) => {
    return "5";
}

const getPage = ({ id }) => {
    const pageData = [{"id":6,"type":"CHeader","contents":{"isFullHeader":true,"color":"#ffffff","background":{"image":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg-1.jpg","height":"65px"},"topBar":{"title":"Code Core","menuId":1,"menuItems":[{"id":1,"to":"/page/home","title":"Home"},{"id":2,"to":"/page/aboutus","title":"About Us"},{"id":3,"to":"/login","title":"Login"},{"id":4,"to":"/dashboard/main","title":"Dashboard"}],"drawerPosition":"right"},"title":"Header Content","subTitle":"Regardless of whether you are a photography industry professional or\n            just a newcomer hobbyist, editing and post-processing your pics on\n            the go is now so much easier!","buttons":{"primary":{"text":"Primary","url":"#Primary"},"secondary":{"text":"Secondary","url":"#Secondary"}}}},{"id":1,"type":"CTitleText","contents":{"title":{"text":"GET OUR APP AND TURN EVERY PHOTO","isVisible":true,"align":"center","color":"#000"},"subTitle":{"text":"You Take Into a Masterpiece!","isVisible":true,"align":"center","color":"#000"},"line":{"isVisible":true,"align":"center"},"body":{"text":"Despite all the intuitiveness of interface and easy-to-understand UX\n                    and UI, an application as complex as ours can get you bumping into\n                    some roadblocks or asking some technical questions over time. We can\n                    assure you, that while our Customer Support dept. will be ready to\n                    help you 24/7, we have also placed all the most frequently asked\n                    questions and issues on this page…","isVisible":true,"align":"center","color":"#000"},"readMore":{"text":"Read More","url":"#","isVisible":true,"align":"center","color":"#000"}}},{"id":2,"type":"CImageText","contents":{"color":"white","background":"linear-gradient(0deg, rgba(253,29,78,1) 0%, rgba(175,56,13,0.9917717086834734) 100%)","contentWidth":"50%","image":{"isVisible":true,"position":"left","align":"center","width":"50%","url":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/bg5.png","title":"mobile"},"title":{"text":"GET OUR APP AND TURN EVERY PHOTO","isVisible":true},"subTitle":{"text":"You Take Into a Masterpiece!","isVisible":true},"line":{"isVisible":true,"width":null},"body":{"text":"Despite all the intuitiveness of interface and easy-to-understand UX\n                      and UI, an application as complex as ours can get you bumping into\n                      some roadblocks or asking some technical questions over time. We can\n                      assure you, that while our Customer Support dept. will be ready to\n                      help you 24/7, we have also placed all the most frequently asked\n                      questions and issues on this page…","isVisible":true},"readMore":{"text":"Read More","url":"#","isVisible":true}}},{"id":3,"type":"CImageTile","contents":{"columnNumber":5,"tiles":[{"imageUrl":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img1.jpg","title":"Image","subTitle":"subTitle","details":"details"},{"imageUrl":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img2.jpg","title":"Image","subTitle":"subTitle","details":"details"},{"imageUrl":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img3.jpg","title":"Image","subTitle":"subTitle","details":"details"},{"imageUrl":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img4.jpg","title":"Image","subTitle":"subTitle","details":"details"},{"imageUrl":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img5.jpg","title":"Image","subTitle":"subTitle","details":"details"},{"imageUrl":"https://ld-wp.template-help.com/wordpress_63433/wp-content/uploads/2016/11/img6.jpg","title":"Image","subTitle":"subTitle","details":"details"}]}},{"id":4,"type":"CIconTitleText","contents":{"backgroundColor":"#fff","containerColor":"#fff","tiles":[{"id":1,"icon":"Gamepad","title":"GET OUR APP AND TURN EVERY PHOTO","text":"You Take Into a Masterpiece!"},{"id":2,"icon":"Folder","title":"GET OUR APP AND TURN EVERY PHOTO","text":"You Take Into a Masterpiece!"},{"id":3,"icon":"TabletMac","title":"GET OUR APP AND TURN EVERY PHOTO","text":"You Take Into a Masterpiece!"}]}},{"id":5,"type":"CFooter","contents":{"text":"Code Core Co. © 2018. Privacy Policy | Terms Of Use","term":{"text":"Terms Of Use","url":"#Term"},"style":{"color":"#fff","backgroundColor":"#263238"},"socialData":[{"id":1,"icon":"TabletMac","url":"http://www.google.com"},{"id":2,"icon":"TabletMac","url":"http://www.google.com"},{"id":3,"icon":"TabletMac","url":"http://www.google.com"}]}}]
    const data = {
        "id": 2,
        "modules": JSON.stringify(pageData),
        "trash": true,
        "trash_date": "2019-03-05T01:05:25.868Z",
        "title": "Page",
        "action": "page",
        "main_page": true
    };
    return JSON.stringify(data);
}

module.exports = {
    savePage,
    trashPage,
    getPage
}
