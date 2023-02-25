const str = `
1.dima 
2.masha 
3.kun`
console.log(str.match(/^\d/gm));




function printArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
     console.log(arr[i], 'array');
    }
   }
   
   printArrayValues([1, 2, 3]);
   
     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     const filt = arr.filter(arr => arr <= 5)
     console.log(filt);
