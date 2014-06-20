var book=function(title, author, genre, read){
    this.title=title||'Title unknown';
    this.author=author || 'Author unknown';
    this.genre=genre || 'Genre unknown';
    this.read=read;
    this.read_date= " ";
    };
    
var booklist = function(){
    this.bookShelf=[];
    this.progress = function (){
        var books_read=0;
        var books_to_read=0;
        for (var i=0; i<bookShelf.length; i++){
            if (bookShelf[i].read===true){
                books_read+=1;
            }
            else{
                books_to_read+=1;
            }    
        }
        console.log("Books Read:" + books_read);
        console.log("Books to Read:" + books_to_read);
    };
    this.addBook = function(book) {
        this.bookShelf.push(book);
    };
    this.nextBook = function() {
        for (var i=0; i<this.bookShelf.length; i++) {
            if (this.bookShelf[i].read !== true and this.bookShelf[i].current) {
               var nextBook = this.bookShelf[i];
               console.log("The next book to read is " + nextBook.title + " by " + nextBook.author + ".");
               return;
            }
        }
    };
    
};
    
    
var book1 = new book("Jane Eyre", "Bronte", "Romance", false);
var myBooks = new booklist();
myBooks.addBook(book1);
myBooks.nextBook();
