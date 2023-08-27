// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.


const books={
    "abc":2019,"cde":2011,"efg":2008,"hjk":2000
}

// books.filter(obj.keys(books)<2010);
const publishedBooksbefore2010=Object.keys(books).filter(book=>books[book]<2010).map(book=>book.toUpperCase());
console.log(publishedBooksbefore2010)