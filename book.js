

function searchBook(){

    window.location="search.html"
}

function AddBook(){

    book={
        bookname:bname.value,
       
        bookauthor:bauth.value,
        desc:bdes.value 
    }
    if (bname.value in localStorage) {

        alert("Book already present")
        
    }
    else{

        localStorage.setItem(bname.value,JSON.stringify(book))
        alert(" New book added")
        window.location="search.html"
    }   
}
function Search(){

    bookname1=bn1.value
    if (bookname1 in localStorage) {
         selectedBook=JSON.parse(localStorage.getItem(bookname1))

         result.innerHTML=`<h2 class="text-success">Book Name    : ${selectedBook.bookname}</h2>
        <h2 class="text-success">Author Name  : ${selectedBook.bookauthor}</h2>
        <h2 class="text-success">Description  : ${selectedBook.desc}</h2>   `         
     
    }
    else{

        result.innerHTML=`<h2 class="text-danger">Book is not exist</h2> `
    }
}

