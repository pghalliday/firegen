import firegen from '../';
import {
  DEFAULT_ROOT,
} from '../constants';

async function init() {
  await firegen.init(DEFAULT_ROOT);
}

export default init;
