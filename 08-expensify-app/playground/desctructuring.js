const book = {
    book: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName)