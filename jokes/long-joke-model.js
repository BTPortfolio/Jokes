const db = require('../data/db-config.js');

module.exports = {
    find,
    findByCategory,
    add,
    remove
}

function find() {
    return db('longJokes')
}

function findByCategory(category) {
    return db('longJokes').where({ category })
}

function add(joke) {
    return db('longJokes')
        .insert(joke)
        .then(ids => {
            return joke
        })
}

function remove(id) {
    return db('longJokes')
        .where({ id })
        .then(joke => {
            if (!joke[0]) {
                return null
            } else {
                return db('longJokes')
                    .where({ id })
                    .del()
                    .then(() => {
                        return joke[0];
                    })
            }
        })

}