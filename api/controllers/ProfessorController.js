/**
 * ProfessorController
 *
 * @description :: Server-side logic for managing Professors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `ProfessorController.create()`
   */
  create: function(req, res) {
    var params = req.params.all();
    Professor.create({
      name: params.name,
      email: params.email
    }).exec(function createCB(err, created) {
      return res.json({
        notice: 'Created professor with name ' + created.name + " and email " + created.email
      });
    });
  },


/**
   * `ProfessorController.getQuizzes()`
*/
getQuizzes: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.getQuiz()`
*/
getQuiz: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.getName()`
*/
getName: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.getEmail()`
*/
getEmail: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.setName()`
*/
setName: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.setEmail()`
*/
setEmail: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.getAnswers()`
*/
getAnswers: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.getAnswer()`
*/
getAnswer: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  /**
   * `ProfessorController.getProfessorByEmail()`
*/
getProfessorByEmail: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },



  /**
   * `ProfessorController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `ProfessorController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `ProfessorController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};
