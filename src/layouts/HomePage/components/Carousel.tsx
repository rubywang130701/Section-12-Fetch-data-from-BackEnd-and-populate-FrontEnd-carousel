import { ReturnBook } from "./ReturnBook";
import { useEffect,useState } from "react";
import BookModel from "../../../models/BookModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";


export const Carousel = () => {

  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
// TODO This is a useEffect hook in React that fetches data from a REST API endpoint and updates the state variables books, isLoading, and httpError. Here is an explanation of the code:
//   useEffect is a hook that lets you perform side effects in functional components. In this case, the side effect is fetching data from an API.
//   The fetchBooks function is an async function that makes a GET request to the /api/books endpoint and retrieves data in JSON format.
//   If the response from the API is not ok, i.e. the status code is not in the 200-299 range, an error is thrown.
//   The response data is extracted from the _embedded key of the JSON response.
//   A loop is used to iterate over the response data and create an array of BookModel objects with the required properties.
//   The setBooks function is used to update the state variable books with the loaded data.
//   The setIsLoading function is used to set the state variable isLoading to false to indicate that data loading is complete.
//   If an error occurs during data loading, the setHttpError function is used to update the state variable httpError with the error message.
//   The empty array [] as the second argument to useEffect means that this effect will only run once, on component mount.
  useEffect(() => {
      const fetchBooks = async () => {
        const baseUrl: string = "http://localhost:8080/api/books";

        const url: string = `${baseUrl}?page=0&size=9`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const responseJson = await response.json();

        const responseData = responseJson._embedded.books;

        const loadedBooks: BookModel[] = [];

        for (const key in responseData) {
            loadedBooks.push({
                id: responseData[key].id,
                title: responseData[key].title,
                author: responseData[key].author,
                description: responseData[key].description,
                copies: responseData[key].copies,
                copiesAvailable: responseData[key].copiesAvailable,
                category: responseData[key].category,
                img: responseData[key].img,
            });
        }

        setBooks(loadedBooks);
        setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
        setIsLoading(false);
        setHttpError(error.message);
    })
}, []);

if (isLoading) {
  return (
      <SpinnerLoading/>
  )
}

if (httpError) {
  return (
      <div className='container m-5'>
          <p>{httpError}</p>
      </div>
  )
}

  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your text "I stayed up too late reading" book.</h3>
      </div>
      <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval="false">
        {/* Desktop  */}
        <div className="carousle-inner">
          <div className="carousel-item active">
          <div className='row d-flex justify-content-center align-items-center'>
                            {books.slice(0, 3).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-conten-center align-items-center">
            {books.slice(3, 6).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))}
            </div>
          </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouseIExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouseIExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Mobile */}
        <div className="d-lg-none mt-3">
          <div className="row d-flex justify-content-center align-items-center">
            <ReturnBook book={books[7]} key={books[7].id}/>
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn=lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
}