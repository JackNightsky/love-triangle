/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
  	if (i+1 != preferences[i]) {
  	    if (preferences[preferences[preferences[i]-1]-1] == i+1) {
  	    	count++;
  	    }
    }
   //возврат значения из функции для проверки количества треугольников
  }
  count = count / 3
  return count;
};