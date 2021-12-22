/*A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book 
or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side
When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. 
The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page
what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .
Return the minimum value, .
https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true&h_r=next-challenge&h_v=zen*/
const books = (n, p) => {
    let storageBook = [],
        pairs = [];
    for (let i = 0; i <= n; i++) {
        if (pairs.length == 2) {
            storageBook.push(pairs)
            pairs = []
            pairs.push(i)

        } else {
            pairs.push(i);
        }
        if (i == n) {
            pairs.push(storageBook.length + 1)
            storageBook.push(pairs)
        }
    }
    let normal, revers;
    storageBook.map((e, i) => {
        e.indexOf(p) != -1 ? normal = i : null
        return e;
    }).reverse().map((e, i) => { e.indexOf(p) != -1 ? revers = i : null })
    return Math.min(normal, revers);
}
console.log(books(6, 2));