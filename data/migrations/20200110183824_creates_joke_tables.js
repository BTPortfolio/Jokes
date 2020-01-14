
exports.up = function (knex) {
    return knex.schema
        .createTable('jokes', tbl => {
            tbl.increments();
            tbl.string('category', 200)
                .notNullable()
            tbl.string('setup', 1500)
                .notNullable()
            tbl.string('punchline', 1500)
                .notNullable()
        })
        .createTable('longJokes', tbl => {
            tbl.increments()
            tbl.string('joke', 9000)
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('jokes')
        .dropTableIfExists('longJokes')
};
