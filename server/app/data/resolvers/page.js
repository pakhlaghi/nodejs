const query = require('./../query');

const savePage = ({ id, title, action, modules, main_page }) => {
    // all main_page = false
    main_page && resetMainPage();

    return id > 0 ? updatePage(id, title, action, modules, main_page) : insertPage(title, action, modules, main_page)
}

const trashPage = ({ ids }) => {
    return query.trashByIds("pages", ids);
}

const getPage = ({ id }) => {
    return query.selectById("pages", id);
}

// private -------------------------
const resetMainPage = () => {
    query.updateByCondition("pages", { main_page: false });
}

const insertPage = (title, action, modules, main_page) => {
    return query.insert("pages", { title, action, modules, main_page });
}

const updatePage = (id, title, action, modules, main_page) => {
    return query.updateById("pages", { title, action, modules, main_page }, id);
}

module.exports = {
    savePage,
    trashPage,
    getPage
}