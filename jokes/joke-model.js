const db = require('../data/db-config.js');

module.exports = {
    find,
    findByCategory,
    add,
    remove
}

function find() {
    return db('jokes')
}

function findByCategory(category) {
    return db('jokes').where({ category })
}

function add(joke) {
    return db('jokes')
        .insert(joke)
        .then(ids => {
            return joke
        })
}

function remove(id) {
    return db('jokes')
        .where({ id })
        .then(joke => {
            if (!joke[0]) {
                return null
            } else {
                return db('jokes')
                    .where({ id })
                    .del()
                    .then(() => {
                        return joke[0];
                    })
            }
        })

}