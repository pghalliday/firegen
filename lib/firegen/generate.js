'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var generate = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref) {
    var _this = this;

    var root = _ref.root,
        config = _ref.config;
    var files, dirsAndFiles, promises;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            files = [_path2.default.resolve(root, config.output.api), _path2.default.resolve(root, config.output.database), _path2.default.resolve(root, config.output.storage)];
            dirsAndFiles = files.map(function (file) {
              return {
                dir: _path2.default.dirname(file),
                file: file
              };
            });
            promises = dirsAndFiles.map(function (dirAndFile) {
              return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return pmkdirp(dirAndFile.dir);

                      case 2:
                        _context.next = 4;
                        return pwriteFile(dirAndFile.file, '');

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }))();
            });
            _context2.next = 5;
            return Promise.all(promises);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function generate(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _es6Promisify = require('es6-promisify');

var _es6Promisify2 = _interopRequireDefault(_es6Promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pwriteFile = (0, _es6Promisify2.default)(_fs.writeFile);
var pmkdirp = (0, _es6Promisify2.default)(_mkdirp2.default);

exports.default = generate;