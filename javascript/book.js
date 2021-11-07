function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages

    this.info = function(){
        return  title +  " by " + author + ", " + pages + " pages, not read yet"
    }
}

function addBookToLibrary(){
    let title = window.prompt("Enter your title: ");
    let author = window.prompt("Enter your author: ");
    let pages = window.prompt("Enter your pages: ");
    
    return new Book(title, author, pages);
}

let my_library = [];


// the JavaScript file
const btn = document.querySelector('#add_book');
btn.addEventListener('click', () => {
    my_library.push(new Book("eric", "chou", "pages"));
    console.log(my_library);
});