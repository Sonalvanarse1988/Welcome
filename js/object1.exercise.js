//blog post Objects
//title,date,author,comments, category
//method-remove

/*function CreateBlogPost( title,date, author, comments=[],category){
    return{
        title,
        date,
        author,
        comments,
        category,
       removeBlogPost(){
            document.write('blog removed');
        }

    }
}
let post1 = CreateBlogPost('ABC','26-08-2021','Srishti',[], 'SEO');

console.log(post1);*/

//Using Constructor

function BlogPost(title, date,author,comments=[], category){
    this.title= title;
    this.date = date;
    this.author = author;
    this.comments = comments;
    this.category = category;
    this.removeBlogPost= function(){
        console.log('blog removed');
    } 
}
let post2 = new BlogPost('PQR','25-O8-2021','Sonal',['Hi','Hello', 'everyone'], 'SEO');

console.log(post2);