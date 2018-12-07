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
jim.innerHTML = "I just changed this text"
// this is a more simple and easy to follow method to add things to the body than the following:

// var newImage = document.createElement("img");
// newImage.src = "https://placehold.it/300X300";
// document.getElementById("jimsDiv").appendChild(newImage);
// this works, but is far too complex and requires computation. The following is the replacement:

jim.innerHTML += '<img src="https://placehold.it/200x200" />'
var response = +prompt("I am a prompt")
console.log(typeof response, response)