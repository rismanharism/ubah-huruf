let kata = 'i love javascript';
let kata2 = ""
let rubah = "aiueo";

// for (let i = 0; i < kata.length; i++) {
//     let flag = 0
//     for (let j = 0; j < rubah.length; j++) { 
//         if (kata[i] === rubah[j]) {
//      flag = true
// }

// }
// if(flag){
//     kata2+= "$"}
// else{
//     kata2+= kata[i]
// }

// }
// console.log(kata2)
let i = 0 ;
let j = 0 ;

while( i <kata.length){
    while (j < rubah.length){
        if(kata[i] === rubah[j]){
        kata2+= "$"
        }
        else {kata2+= kata[i]
        }
   
 }

}
console.log(kata2)
 





