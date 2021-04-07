/**
 * Check if an array is empty
 * @param  {Array} arr The Array to be checked
 * @return {boolean} Returns true if the Array is empty or false if it is not
 */
function isArrayEmpty (arr) {
	if (arr.length > 0 && arr[0] !== null) {
		return false;
	}

	return true;
}

module.exports = isArrayEmpty;
