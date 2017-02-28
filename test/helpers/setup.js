// polyfills
import 'babel-polyfill';

// common assertions
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
chai.should();
chai.use(sinonChai);
global.expect = chai.expect;
global.sinon = sinon;
