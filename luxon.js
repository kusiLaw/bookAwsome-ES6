// // import { DateTime } from '../node_modules/luxon/src/luxon.js';
// import { DateTime } from '../../node_modules/luxon/build/es6/luxon.js';
	
import { DateTime } from 'luxon';

const dateTime = document.getElementById('date-time');
 dateTime.innerHTML = () => DateTime.now().toFormat('MMMM dd, yyyy h:m:s');

// export default mydatetime;