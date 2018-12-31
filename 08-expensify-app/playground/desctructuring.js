const book = {
    book: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName)

// Array Destructuring

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [drink,,mediumPrice] = item;
console.log(`A medium ${drink} cost ${mediumPrice}`);