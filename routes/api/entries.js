const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Entry model
const Entry = require('../../models/Entry');

const sortDesc = (a, b) => {
  return (a.date - b.date);
}

// GET all entries
router.get('/:userId', (req, res) => {
  Entry.find({ userId: req.params.userId })
    .then(entries => {
      const sorted = entries.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      res.json(sorted);
    })
    .catch(err => res.status(400).json(err));
});

// POST new entry
router.post('/:userId/add', auth, (req, res) => {
  const newEntry = new Entry({
    userId: req.params.userId,
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
        spent: req.body.spent,
        saved: req.body.saved
      }).then(() => Entry.findById(req.params.id).then(entry => res.json(entry)))
    })
    .catch(err => res.status(404).json({ success: false }));
});

// DELETE an entry
router.delete('/delete/:id', auth, (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => entry.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;