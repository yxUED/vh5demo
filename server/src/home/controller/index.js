const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success({data: '1111'});
  }
};
