
let numbers=["1","2","3"];

logger(numbers)

function logger(numbers){
    for( number of numbers){
    console.log(number);
};
};

let tempr =[50,27,63,88,22];
let num1 = 30

hottestDays( tempr, num1 ) ;

function hottestDays(tempr, num1 ){
    for( deg of tempr){
    if( deg > 30){
    console.log(deg)
}
}
};
let bookId = 1
let books=[
    {schoolbook:"bio",Id: 1},
    {schoolbook:"geo",Id: 2},
    {schoolbook:"eng",Id: 3},
    {schoolbook:"arb",Id: 4},

];



getBookById(bookId, books)

function getBookById( bookId, books){
    for(book of books){
        if(book.Id == bookId){
        console.log(book.schoolbook);
        break;
        }else{
        console.log("undefined")
       }
    }
};







