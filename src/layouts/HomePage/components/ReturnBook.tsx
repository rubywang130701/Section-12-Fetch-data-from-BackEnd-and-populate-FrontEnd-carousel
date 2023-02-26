import React from "react";
import BookModel from "../../../models/BookModel";
// TODO This is a functional component that takes a BookModel object as a prop and returns a JSX element. It displays the book's image, title, author, and a button to reserve the book. If the book has an image, it is displayed using an <img> tag with the src attribute set to the img property of the BookModel object. If the book does not have an image, a default image is displayed using the require() function to import it from the images directory.
export const ReturnBook: React.FC<{book: BookModel}> = (props) => {
  return (
    <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                {props.book.img ? 
                    <img
                        src={props.book.img}
                        width='151'
                        height='233'
                        alt="book"
                    />
                    :
                    <img
                        src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                        width='151'
                        height='233'
                        alt="book"
                    />
                }
        <h6 className="mt-2">{props.book.title}</h6>
        <p>{props.book.author}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
