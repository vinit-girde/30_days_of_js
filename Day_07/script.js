// Activity 1: Object Creation and Access
// T-1 : Create an object representing a book with properties like title, author, and year, and log the object to the console.

const bookObj = {
  title: "Do Epic Shit",
  author: "Ankur Warikoo",
  year: 2022,
};

// console.log(bookObj); // { title: 'Do Epic Shit', author: 'Ankur Warikoo', year: 2022 }

// T-2 : Access and log the title and author properties of the book object.

// console.log("Book Title : ", bookObj.title); // Book Title :  Do Epic Shit
// console.log("Book Author :", bookObj.author); // Book Author : Ankur Warikoo

// Activity 2: Object Methods
// T-3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// Adding the method using an arrow function
bookObj.getBooksInfo = () => {
  console.log(
    "Book name is ",
    bookObj.title + " and author of book is ",
    bookObj.author
  );
};
// calling the method

// bookObj.getBooksInfo(); // Book name is  Do Epic Shit and author of book is  Ankur Warikoo

// T-4 : Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// adding method to update book's year property.
bookObj.updateBooksYear = (updated_year) => {
  bookObj.year = updated_year;
  console.log("Year updated");
};
// calling the method to change book year
// bookObj.updateBooksYear(2024);
// console.log(bookObj);

/*  
    Year updated
    {
        title: 'Do Epic Shit',
        author: 'Ankur Warikoo',
        year: 2024,
        getBooksInfo: [Function (anonymous)],
        updateBooksYear: [Function (anonymous)]
    }
*/

// Activity 3: Nested Objects
// T-5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const libraryObject = {
  name: "Cannara Bank Library",
  books: [
    {
      title: "Book One",
      author: "Author one",
      publishingYear: "1998",
      subject: "History",
    },
    {
      title: "Book Two",
      author: "Author Two",
      publishingYear: "2004",
      subject: "Mathematics",
    },
    {
      title: "Book Three",
      author: "Author Three",
      publishingYear: "2008",
      subject: "Chemistry",
    },
  ],
};

// console.log(libraryObject);

// T-6 : Access and log the name of the library and the titles of all the books in the library.

// console.log("Name of library : ", libraryObject.name); // Name of library :  Cannara Bank Library

// console.log(libraryObject.books.map((book) => book.title)); // [ 'Book One', 'Book Two', 'Book Three' ]

// console.log(...libraryObject.books.map((book) => book.title)); // Book One Book Two Book Three

// Activity 4: The this Keyword
// T-7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

bookObj.getBooksInfoUsingThis = function () {
  console.log("Books title is ", this.title + "and book's year is ", this.year);
};

// bookObj.getBooksInfoUsingThis(); // Books title is  Do Epic Shitand book's year is  2022

// Activity 5: Object Iteration
// T-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in bookObj) {
  console.log("Objects key is", key + " and its value is :", bookObj[key]);
}

// T-9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(bookObj));
console.log(Object.values(bookObj));
