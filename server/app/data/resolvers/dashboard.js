const query = require('./../query');

const getDashboard = () => {
    return query.selectAll("dashboard");
}

module.exports = {
    getDashboard
}