const { mongooseToOject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
  // [GET] /me/stored/courses
  async storedCourse(req, res, next) {
    try {
      Promise.all([
        Course.find({}).sortable(req).paginationable(res),
        Course.countDocumentsDeleted(),
        Course.countDocuments(),
      ]).then(([courses, deletedCount, totalCount]) => {
        res.render('me/stored-courses', {
          totalCount,
          deletedCount,
          courses: mongooseToOject(courses),
        });
      });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /me/trash/courses
  async trashCourse(req, res) {
    try {
      Promise.all([
        Course.findDeleted().paginationable(res),
        Course.countDocumentsDeleted(),
      ]).then(([courses, totalCount]) => {
        res.render('me/trash-courses', {
          courses: mongooseToOject(courses),
          totalCount,
        });
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MeController();
