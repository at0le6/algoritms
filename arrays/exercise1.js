/*When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, 
each word is highlighted independently.
https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true*/
const designerPdfViewer = (h, word) => {
    const boca = atoz(),
        array = word.split('');
    let resArray = array.map(element => {
        let res = boca.indexOf(element);
        return h[res];
    });
    return let = Math.max(...resArray) * word.length;
}
const atoz = () => {
    let array = [],
        acum = 97;
    for (let i = 0; i < 26; i++) {
        array.push(String.fromCharCode(acum));
        acum++;
    }
    return array;
}
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"));