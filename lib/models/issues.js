'use strict';

var mongoose = require('mongoose');

// Schema = mongoose.Schema;

var IssueSchema = new mongoose.Schema({
        // issuesId: Schema.Types.ObjectId,
        category: String,
        status: { type: Boolean, default: false },
        text: String,
        solutions: []
}, { collection: 'Issues' });

module.exports = mongoose.model('issues', IssueSchema);