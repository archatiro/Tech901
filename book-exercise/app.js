const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false 
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
]

for (i = 0; i < books.length; i ++) {
    var title = books[i].title 
    var author = books[i].author
    const body = document.body
    const p = document.createElement("p")
    p.append(title + " by " + author)
    body.append(p)

}