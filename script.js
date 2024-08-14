/* problem 5: Write a javascript function to sort following array of object by title value.*/

const names = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function sortObject(a, b) { // comparing the first and second element
    if(a.title < b.title) {// if a is less than b, it goes to the left side
        return -1;
    } 
    if(a.title > b.title) { // if a is greater than b, it goes to the left side
        return 1;
    }
    else {
        return 0; //If none of the equation above is valid return 0
    }
}
console.log(names.sort(sortObject))