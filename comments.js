// Create web server

// ----------------

// Module dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

// Get all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// Get single comment by id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// Create new comment
router.post('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  var decoded = jwt.decode(token, {complete: true});
  var userId = decoded.payload._id;
  var postId = req.body.postId;
  var comment = new Comment({
    text: req.body.text,
    