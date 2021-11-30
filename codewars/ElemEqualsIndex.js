function indexEqualsValue(a) {
    let index = 0;   
    if (!a) {
        return -1;
    }
    let res = findIndex(a);
    function findIndex(a){
      return _findIndex(a, index);
    };
    
    function _findIndex(a, index) {
        if (index == (a.length - 1)) {
           return -1; 
        }
        if (a[index] == index) {
            return index;
        } 
        if (a[index] < index) {
            return _findIndex(a, index + 1);
        } 
    }

    return res;
}
console.log(indexEqualsValue());
console.log(indexEqualsValue([-8,0,2,5])); //2
console.log(indexEqualsValue([-1,0,3,6])); //-1
console.log(indexEqualsValue([-3,0,1,3,10])); //3 
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15])); //1
console.log(indexEqualsValue([9,10,11,12,13,14])); //-1
console.log(indexEqualsValue([0])); //0

  