const db = require("./dbProvider");

const selectAll = (table) => {
    return db.manyOrNone(`SELECT * FROM ${table};`)
        .then((data) => JSON.stringify(data));
};

const selectOne = (table, isJsonStrigify = true) => {
    return db.oneOrNone(`SELECT * FROM ${table};`)
        .then((data) => isJsonStrigify ? JSON.stringify(data) : data);
};

const selectById = (table, id) => {
    return db
        .oneOrNone(`SELECT * from ${table} where id = ${id}`)
        .then((data) => JSON.stringify(data));
};

const selectOneByCondition = (table, condition) => {
    const whereCondition = condition ? `where ${condition}` : '';
    return db
        .oneOrNone(`SELECT * from ${table} ${whereCondition}`)
        .then((data) => JSON.stringify(data));
};

const selectMultiByCondition = (table, condition) => {
    const whereCondition = condition ? `where ${condition}` : '';
    return db
        .manyOrNone(`SELECT * from ${table} ${whereCondition}`)
        .then((data) => JSON.stringify(data));
};

const insert = (table, dataObj) => {
    let fields = '';
    let values = '';
    for (key in dataObj) {
        if (typeof dataObj[key] === "undefined") {
            continue;
        }

        fields += `, ${key}`;
        if (Number.isInteger(dataObj[key])
            || typeof dataObj[key] === "boolean"
            || dataObj[key].toString().indexOf('to_timestamp') >= 0) {
            values += `, ${dataObj[key]}`;
        } else {
            values += `, '${dataObj[key]}'`;
        }
    }

    const query = `insert into ${table} (${fields.substr(1)}) values (${values.substr(1)}) RETURNING id`;
    console.log(query);
    return db.oneOrNone(query)
        .then(data => {
            return data.id;
        })
        .catch(er => {
            return er;
        });
};

const updateByCondition = (table, dataObj, condition) => {
    let update = '';
    for (key in dataObj) {
        // Undefined
        if (typeof dataObj[key] === "undefined") {
            continue;
            // Number, Boolean, Date
        } else if (Number.isInteger(dataObj[key])
            || typeof dataObj[key] === "boolean"
            || dataObj[key].toString().indexOf('to_timestamp') >= 0) {
            update += `, ${key}=${dataObj[key]}`;
            // STRING
        } else {
            update += `, ${key}='${dataObj[key]}'`;
        }
    }
    const whereCondition = condition ? `where ${condition}` : '';
    const query = `update ${table} set ${update.substr(1)} ${whereCondition};`;
    console.log(query);
    return db.oneOrNone(query).then(_ => {
        return "updated";
    })
        .catch(er => {
            return er;
        });
};

const updateById = (table, dataObj, id) => {
    return updateByCondition(table, dataObj, `id = ${id}`).then(_ => {
        return id;
    })
        .catch(er => {
            return er;
        });;
};

const deleteByIds = (table, ids) => {
    const query = `delete from ${table} where ${idInCondition(ids)};`;
    return db.oneOrNone(query)
        .then(_ => {
            return "deleted";
        })
        .catch(er => {
            return er;
        });
};

const trashByIds = (table, ids) => {
    return updateByCondition(table, { trash: true, trash_date: `to_timestamp(${Date.now()} / 1000.0)` }, idInCondition(ids));
};

const idInCondition = (ids) => {
    let condition = Array.isArray(ids) ? ids.reduce((acc, current) => acc.toString() + ',' + current.toString()) : ids;
    condition = `id in (${condition})`;
    return condition;
}


module.exports = {
    selectAll,
    selectOne,
    selectById,
    selectOneByCondition,
    selectMultiByCondition,
    insert,
    updateById,
    updateByCondition,
    deleteByIds,
    trashByIds
}