const express = require('express');
const Jokes = require('./joke-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Jokes.find()
        .then(jokes => {
            res.json(jokes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get jokes' });
        });
});

router.get('/:category', (req, res) => {
    const { category } = req.params;
    Jokes.findByCategory(category)
        .then(joke => {
            if (joke) {
                res.json(joke);
            } else {
                res.status(404).json({ message: 'Could not find joke with given category.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get jokes' });
        });
});

router.post('/', (req, res) => {
    const jokeData = req.body;
    Jokes.add(jokeData)
        .then(joke => {
            res.status(201).json(joke);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new joke' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Jokes.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ message: "Successfully deleted" });
            } else {
                res.status(404).json({ message: 'Could not find joke with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete joke' });
        });
});

module.exports = router;