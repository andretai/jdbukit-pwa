const express = require('express');
const router = express.Router();

// Entry model
const Entry = require('../../models/Entry');

// GET all entries
router.get('/', (req, res) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json(err));
});

// POST new entry
router.post('/add', (req, res) => {
  const newEntry = new Entry({
    type: req.body.type,
    spent: req.body.spent,
    saved: req.body.saved
  });
  newEntry.save()
    .then(entry => res.json(entry))
    .catch(err => res.status(404).json(err));
});

// GET an entry
router.get('/:id', (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(404).json(err));
});

// POST an updated entry
router.post('/update/:id', (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => {
      entry.updateOne({
        type: req.body.type,
        spent: req.body.paid,
        saved: req.body.saved
      }).then(() => res.json({ success: true }))
    })
    .catch(err => res.status(404).json({ success: false }));
});

// DELETE an entry
router.delete('/delete/:id', (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => entry.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;