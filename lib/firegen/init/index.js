'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var init = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(root) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([config.create({
              root: root,
              config: {
                entry: _constants.DEFAULT_ENTRY,
                output: {
                  api: _constants.DEFAULT_API,
                  database: _constants.DEFAULT_DATABASE,
                  storage: _constants.DEFAULT_STORAGE
                }
              }
            }), entry.create({
              file: _path2.default.join(root, _constants.DEFAULT_ENTRY)
            })]);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _config = require('./config');

var config = _interopRequireWildcard(_config);

var _entry = require('./entry');

var entry = _interopRequireWildcard(_entry);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = init;