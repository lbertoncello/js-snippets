/**
 * Convert a Map to an array
 * @param  {Map} map The Map to be converted
 * @return {Object[]} The Array created from the Map
 */
 function mapToArray (map) {
	const array = Array.from(map, ([ name, value ]) => (value));

	return array;
}

module.exports = mapToArray;
