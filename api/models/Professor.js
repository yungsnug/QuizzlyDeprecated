/**
* Professor.js
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

    facultyId : { type: 'string' },

    name : { type: 'string' },

    email : { type: 'string' },

    quizzes: {
      collection: 'quiz',
      via: 'professor'
    },

    answersPerProfessor: {
      collection: 'answerPerProfessor',
      via: 'professor'
    }
  }
};
