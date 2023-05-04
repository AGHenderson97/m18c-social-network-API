const { User } = require('../models');

const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id).populate('thoughts friends');
      if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update user by ID
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete user by ID
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }
      res.json({ message: 'User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a friend
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );
      if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a friend
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
