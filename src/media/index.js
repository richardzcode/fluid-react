import { Device } from 'fsts';

import Empty from './Empty';
import MatchMedia from './MatchMedia';

let _instance = new Empty();
if (Device.hasWindow()) {
    _instance = new MatchMedia();
}
export default _instance;
