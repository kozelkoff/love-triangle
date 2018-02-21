/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

    let counter=0;
    let x, y;
    for(let i=0; i<preferences.length; i++){
        x = preferences[i];
        y=  preferences[x-1];
        if(preferences[y-1]==i+1) counter++;
    }
    return Math.floor(counter/3);
};
