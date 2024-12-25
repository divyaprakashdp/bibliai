import { Link } from "react-router-dom";

export default function BookCards(props) {

  let booksCard = props.bookData.map((book) => (
    <Link
      key={book?.id}
      to={`/books/${book?.id}`}
      className="block group cursor-pointer"
    >
      <div
        className="relative h-52 w-32 rounded-r-lg overflow-hidden group-hover:transform-gpu shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] hover:scale-110"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute top-0 left-0 w-full h-full transform translate-z-50 rotate-y-0 backface-hidden hover:transform hover:translate-z-50 hover:rotate-y-90 group-hover:translate-z-50 group-hover:rotate-y-90 duration-500 ease-in-out">
          {book?.volumeInfo?.imageLinks?.thumbnail ? (
            <img
              src={book?.volumeInfo?.imageLinks?.thumbnail}
              alt={book?.volumeInfo?.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center h-full text-lime-300 text-xl text-center bg-gradient-to-bl from-orange-500 via-purple-500 to-blue-500">
              {book?.volumeInfo?.title}
            </div>
          )}
        </div>
        <div className="absolute top-0 right-0 w-4 h-full transform translate-z-25 rotate-y-90 backface-hidden hover:transform hover:translate-z-25 hover:rotate-y(0) group-hover:translate-z-25 group-hover:rotate-y(0) duration-500 ease-in-out"></div>
      </div>
    </Link>
  ));
  return booksCard;
}