/**
 * Convert an Array of Objects to a Map
 * @param  {Object[]} array The Array to be converted
 * @param  {string} [index=id] The key in the Array Objects to be used as an index
 * @return {Map} The Map created from the Array
 */
function arrayToMap(array, index='id') {
    const rawMap = array.reduce(function (map, obj) {
        map[obj[index]] = obj;

		return map;
	}, {});

    return new Map(Object.entries(rawMap));
}