export default function BookCards(props) {
  // const BookCoverWithoutImage = (title) => {
  //   return (
  //     <div className="relative bg-green-300 w-32 h-64">
  //       <div className="absolute inset-0 flex items-center justify-center">
  //         <p className="text-white text-lg">{title}</p>
  //       </div>
  //     </div>
  //   );
  // };

  let booksCard = props.bookData.map((book) => (
    <a
      key={book?.id}
      href={`/${book?.id}`}
      className="block group cursor-pointer"
    >
      <div
        className="relative h-52 w-32 rounded-r-lg overflow-hidden group-hover:transform-gpu hover:duration-500 hover:skew-y-12"
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
    </a>
  ));
  return booksCard;
}

// const BookCards =  ({bookData}) => {
//   return (
//     {bookData.map((book) => (
//       <a
//         key={book?.id}
//         href={`/${book?.volumeInfo.title}`}
//         className="block group cursor-pointer"
//       >
//         <div
//           className="relative h-52 w-64 rounded-lg overflow-hidden group-hover:transform-gpu hover:duration-500 hover:ease-in-out"
//           style={{ perspective: '1000px' }}
//         >
//           <div
//             className="absolute top-0 left-0 w-full h-full transform translate-z-50 rotate-y-0 backface-hidden hover:transform hover:translate-z-50 hover:rotate-y-90 group-hover:translate-z-50 group-hover:rotate-y-90 duration-500 ease-in-out"
//           >
//             {book?.volumeInfo?.imageLinks?.thumbnail ? (
//               <img
//                 src={book?.volumeInfo?.imageLinks?.thumbnail}
//                 alt={book?.volumeInfo?.title}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="flex justify-center items-center h-full text-white text-xl">
//                 {book?.volumeInfo?.title}
//               </div>
//             )}
//           </div>
//           <div
//             className="absolute top-0 right-0 w-4 h-full transform translate-z-25 rotate-y-90 backface-hidden hover:transform hover:translate-z-25 hover:rotate-y(0) group-hover:translate-z-25 group-hover:rotate-y(0) duration-500 ease-in-out"
//           ></div>
//         </div>
//       </a>
//     ))}
//   );
// };

// export default BookCards;
