const router = require('express').Router(thoughtController);
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../server');
