const query = require('./../query');

const getLayout = () => {
    return query.selectOne("layout");
}

// TODO: sql view can be added
const saveLayout = ({ content }) => {
    let id = null;
    query.selectAll("layout").then(data => {
        id = data.id
    });
    return id > 0 ? query.updateById("layout",{ content }, id) : query.insert("layout", { content });
}

module.exports = {
    getLayout,
    saveLayout
}