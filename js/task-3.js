// const bookShelf = {
//     books: [
//       { title: "The Last Kingdom", rating: 8 },
//       { title: "The Mist", rating: 6 },
//     ],


//       changeRating(bookName, newRating) {
//           for(const book of this.books) {
//               if(book.title === bookName) {
//                   // Знайшли необхідний об’єкт за назвою книги
//               }
//           }
//       }
//   };
// console.log(bookShelf);


const profile = { 
    username: "Jacob",
    playTime: 300, 
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};


let copi = profile;


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"