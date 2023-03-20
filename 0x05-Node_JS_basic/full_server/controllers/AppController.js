/**
 * Contains the miscellaneous route handlers.
 *  @author Ahortu Derrick <https://github.com/Ahortu90>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
