const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success({name: 'bboy', phone: 18911682431});
  }
};
