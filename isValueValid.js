/*
 * Some imports from other snippets are required
*/
const isArrayEmpty = require('./isArrayEmpty');
const isObjEmpty = require('./isObjEmpty');

/**
 * Check if a value is null, false or empty
 * @param  {Map} value The value to be checked
 * @return {boolean} Returns true if the value is valid or false if it is not
 */
function isValueValid (value) {
	if (value !== null && value !== false) {
		if (Array.isArray(value)) {
			if (!isArrayEmpty(value)) {
				return true;
			}
		} else if (!isObjEmpty(value)) {
			return true;
		}
	}

	return false;
}

module.exports = isValueValid;
