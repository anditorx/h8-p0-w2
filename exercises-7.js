// // 1. Menyusun Barisan Bintang

// var rows1 = 5; // input the number of rows
// for(i=1;i<=rows1;i++){
//     console.log('*')
// }

// // 2. Menyusun Barisan Bintang Dengan Nested Looping
// var rows2 = 5;
// for(i=1;i<=rows2;i++){
//     var bintang = '';
//     for(j=1;j<=rows2;j++){
//       bintang = bintang + '*';
//     }
//     console.log(bintang);
//   }

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
for(i=1;i<=rows3;i++){
    var bintang = '';
    for(j=1;j<=i;j++){
      bintang = bintang+'*'
    }
     console.log(bintang)
  }
  