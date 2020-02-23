module.exports = function reverse (n) {
    return n.toString().split('').filter((el,indx,arr) => {
        return el !== '-' ;
        }).reverse().filter((el, indx, arra) => {
          return el[indx] !== '0' ;
        }).join('');
    
}
