import { DateTime } from '../node_modules/luxon/src/luxon.js';

const mydatetime = () => DateTime.now().toFormat('MMMM dd, yyyy h:m:s');

export default mydatetime;