'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var generate = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var preadFile, configJson;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            preadFile = (0, _es6Promisify2.default)(_fs2.default.readFile);
            _context.next = 3;
            return preadFile(configFile);

          case 3:
            configJson = _context.sent;
            _context.next = 6;
            return _2.default.generate({
              root: _constants.DEFAULT_ROOT,
              config: JSON.parse(configJson)
            });

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generate() {
    return _ref.apply(this, arguments);
  };
}();

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _es6Promisify = require('es6-promisify');

var _es6Promisify2 = _interopRequireDefault(_es6Promisify);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var configFile = _path2.default.join(_constants.DEFAULT_ROOT, _constants.CONFIG_FILE);

exports.default = generate;