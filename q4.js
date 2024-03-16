const books=[{
    title:"mhe great gatsby",
    author:"pankaj",
    year:2424,
},
{title:"who and  gatsby",
author:"pankaj",
year:2424,},

{title:"the books gatsby",
author:"pankaj",
year:2424,},

{title:"pride  kill  gatsby",
author:"pankaj",
year:2424,}
]
function logTitles(titles){
    titles.sort();
    console.log(titles.join(","));
}
function extractTitle(books,callback){
    const titles=books.map((book)=>
    book.title);
    callback(titles);
}
extractTitle(books,logTitles);