/**
* AnswerPerProfessor.js
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

    correct : { type: 'boolean' },
    answer: {
      model: 'answer',
      unique: true
    },

    professor: {
      model: 'professor'
    }
  }
};
