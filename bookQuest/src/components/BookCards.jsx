export default function BookCards(props) {
  const BookCoverWithoutImage = (title) => {
    return (
      <div className="relative bg-green-300 w-32 h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg">{title}</p>
        </div>
      </div>
    );
  };

  let booksCard = props.bookData.map((book) => (
    <a key={book?.id} href={`/${book?.volumeInfo.title}`} className="block">
      {book?.volumeInfo?.imageLinks?.thumbnail ? (
        <img
          className="w-32 h-64 object-scale-down rounded-r-xl hover:skew-y-6 hover:-translate-x-6 shadow-2xl"
          src={book?.volumeInfo?.imageLinks?.thumbnail}
          alt={book?.volumeInfo?.title}
        />
      ) : (
        <div className="relative bg-green-300 w-32 h-52 rounded-r-xl hover:skew-y-6 hover:-translate-x-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-lg">{book?.volumeInfo?.title}</p>
          </div>
        </div>
      )}
    </a>
  ));
  return booksCard;
}
