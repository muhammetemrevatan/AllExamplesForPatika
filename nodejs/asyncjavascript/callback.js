/*console.log('1. görev');
console.log('2. görev');
console.log('3. görev');*/

/*const func1 = () => {
    console.log('Func 1 tamamlandı');
};

const func2 = () => {
    console.log('Func 2 tamamlandı');
};

const func3 = () => {
    console.log('Func 3 tamamlandı');
};

func1();
func2();*/

/*const func1 = () => {
    console.log('Func 1 tamamlandı');
    func3();
};

const func2 = () => {
    console.log('Func 2 tamamlandı');
};
const func3 = () => {
    console.log('Func 3 tamamlandı');
    func2();
};
func1();*/

/*
let result = 5;
console.log('1. gelen veri', result);

setTimeout(() => {
    result+=5;
    console.log('2. gelen veri', result); // this transaction is callback
}, 5000);

result+=5;
console.log('3. gelen veri', result);*/

const books = [
    {name: 'Book 1', author: 'author 1'},
    {name: 'Book 2', author: 'author 2'},
    {name: 'Book 3', author: 'author 3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};
//listBooks();

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback(); 
};

addBook({name: 'Book 4', author: 'author 4'}, listBooks)

//listBooks();