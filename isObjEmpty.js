/**
 * Check if an object is empty
 * @param  {Object} obj The Object to be checked
 * @return {boolean} Returns true if the Object is empty or false if it is not
 */
function isObjEmpty (obj) {
	if (Object.entries(obj).length === 0 && obj.constructor === Object) {
		return true;
	}

	return false;
}

module.exports = isObjEmpty;
