const { Reaction, User } = require('../models');

const reactionController = {
  // Get all reactions for a thought
  getAllReactions(req, res) {
    Reaction.find({ thoughtId: req.params.thoughtId })
      .then((dbReactionData) => res.json(dbReactionData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single reaction by id
  getReactionById({ params }, res) {
    Reaction.findOne({ _id: params.id })
      .then((dbReactionData) => {
        if (!dbReactionData) {
          res.status(404).json({ message: 'No reaction found with this id!' });
          return;
        }
        res.json(dbReactionData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create a new reaction
  createReaction({ params, body }, res) {
    Reaction.create({ ...body, thoughtId: params.thoughtId })
      .then((dbReactionData) => {
        User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { reactions: dbReactionData._id } },
          { new: true }
        )
          .then(() => res.json(dbReactionData))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },

  // Update a reaction by id
  updateReaction({ params, body }, res) {
    Reaction.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then((dbReactionData) => {
        if (!dbReactionData) {
          res.status(404).json({ message: 'No reaction found with this id!' });
          return;
        }
        res.json(dbReactionData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Delete a reaction by id
  deleteReaction({ params }, res) {
    Reaction.findOneAndDelete({ _id: params.id })
      .then((dbReactionData) => {
        if (!dbReactionData) {
          res.status(404).json({ message: 'No reaction found with this id!' });
          return;
        }
        User.findOneAndUpdate(
          { _id: dbReactionData.userId },
          { $pull: { reactions: params.id } }
        )
          .then(() => res.json(dbReactionData))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = reactionController;
