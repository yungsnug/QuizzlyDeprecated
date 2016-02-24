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
      email: params.email,
      facultyId: params.facultyId
    }).exec(function createCB(err, professor) {
      return res.json({
        notice: 'Created professor with name ' + professor.name + " and email " + professor.email
      });
    });
  },

  destroy: function() {
    Book.destroy({
      id: 4
    }).exec(function (err){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('Deleted book with `id: 4`, if it existed.');
      return res.ok();
    });
  },

  findByEmail: function(req, res) {
    var params = req.params.all();
    Professor.findOne({email:params.email}).exec(function (err, professor){
      if (err) {
        return res.negotiate(err);
      }
      return res.json(professor);
    });
  },

  /**
     * `ProfessorController.getQuizzes()`
  */
  getQuizzes: function (req, res) {
    Professor.find({name:'Finn'}).exec(function (err, usersNamedFinn){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('Wow, there are %d users named Finn.  Check it out:', usersNamedFinn.length, usersNamedFinn);
      return res.json(usersNamedFinn);
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
    var professor = this.findOne(req, res);
    return res.json(professor.name);
  },

  /**
   * `ProfessorController.getEmail()`
  */
  getEmail: function (req, res) {
    var professor = this.findOne(req, res);
    return res.json(professor.email);
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
};
