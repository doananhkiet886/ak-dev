const storeCoursesController = require('./storeCoursesController')
const trashCoursesController = require('./trashCoursesController')

module.exports = {
  ...storeCoursesController,
  ...trashCoursesController
}
