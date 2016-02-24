/**
* Answer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    text : { type: 'string' },

    question: {
      model: 'question'
    },

    correct: { type: 'boolean' },

    answersPerProfessor: {
      collection: 'answerPerProfessor',
      via: 'answer'
    }
  }
};
