/**
* Question.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    // Primitives
    text: {
      type: 'string'
    },
    type: {
      type: 'string',
      enum: ['multipleChoice', 'freeResponse'],
      required: true
    },

    // Associations
    quiz: {
      model: 'quiz'
    },
    answers: {
      collection: 'answer'
    }

    // Methods
  }
};
