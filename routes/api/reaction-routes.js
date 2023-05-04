const router = require('express').Router();
const {
  getAllReactions,
  getReactionById,
  createReaction,
  updateReaction,
  deleteReaction,
} = require('../../controllers/reaction-controller');

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').get(getAllReactions).post(createReaction);

// /api/reactions/:id
router.route('/:id').get(getReactionById).put(updateReaction).delete(deleteReaction);

module.exports = router;
