'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

var create = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
    var root = _ref.root,
        config = _ref.config;
    var configFile, dirname;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            configFile = _path2.default.join(root, _constants.CONFIG_FILE);
            dirname = _path2.default.dirname(configFile);
            _context.next = 4;
            return pmkdirp(dirname);

          case 4:
            _context.next = 6;
            return pwriteFile(configFile, JSON.stringify(config, null, 2));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function create(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _fs = require('fs');

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _es6Promisify = require('es6-promisify');

var _es6Promisify2 = _interopRequireDefault(_es6Promisify);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pmkdirp = (0, _es6Promisify2.default)(_mkdirp2.default);
var pwriteFile = (0, _es6Promisify2.default)(_fs.writeFile);

exports.create = create;