// console.log(document)
// this makes things look pretty for me
console.dir(document)
// this gives me (within the console of the index) the real code

// var simplifiedDocument = {
//     children: [
//         tag:html{
//             children{
//                 tag: <head>{

//                 },
//                 tag: <body>{
//                     tag: children{
//                         etc...
//                     }
//                 }
//             }
//         }
//     ]
// }
// simplifiedDocument.children.[0].children[1].children[etc...]
// "get element by ID" is our savior. 
var jim = document.getElementById("jimsDiv")
console.log(jim)