const query = require('./../query');

const getDashboard = () => {
    return query.selectOne("dashboard", false);
}

module.exports = {
    getDashboard
}