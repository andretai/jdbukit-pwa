const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Goal = require('../../models/Goal');

// GET all goals
router.get('/:userId', (req, res) => {
  Goal.find({ userId: req.params.userId })
    .then(goals => res.json(goals))
    .catch(err => res.status(400).json(err));
});

// POST new goal
router.post('/:userId/add', auth, (req, res) => {
  const newGoal = new Goal({
    userId: req.params.userId,
    goal: req.body.goal,
    amount: req.body.amount,

  });
  newGoal.save()
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json(err))
});

// POST an updated goal
router.post('/update/:id', (req, res) => {
  Goal.findById(req.params.id)
    .then(goal => {
      goal.updateOne({
        goal: req.body.goal,
        amount: req.body.amount,
        status: req.body.status
      }).then(() => Goal.findById(req.params.id).then(goal => res.json(goal)));
    })
    .catch(err => res.status(404).json({ success: false }));
});

// DELETE a goal
router.delete('/delete/:id', (req, res) => {
  Goal.findById(req.params.id)
    .then(goal => goal.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;