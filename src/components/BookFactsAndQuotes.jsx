import React, { useState, useEffect } from 'react';

const BookFactsAndQuotes = () => {
    const facts = [
        "The first book ever written using a typewriter was 'The Adventures of Tom Sawyer'.",
        "The longest novel ever written is 'In Search of Lost Time' by Marcel Proust.",
        "Bibliosmia is the term for the smell of old books.",
        "The most expensive book ever sold is 'Codex Leicester' by Leonardo da Vinci, purchased by Bill Gates.",
        "'A reader lives a thousand lives before he dies. The man who never reads lives only one.' - George R.R. Martin",
        "'So many books, so little time.' - Frank Zappa",
        "'Until I feared I would lose it, I never loved to read. One does not love breathing.' - Harper Lee",
        "'Books are a uniquely portable magic.' - Stephen King",
    ];

    const [currentFact, setCurrentFact] = useState(facts[0]);

    useEffect(() => {
        const factInterval = setInterval(() => {
            setCurrentFact((prevFact) => {
                const currentIndex = facts.indexOf(prevFact);
                const nextIndex = (currentIndex + 1) % facts.length;
                return facts[nextIndex];
            });
        }, 5000);



        return () => {
            clearInterval(factInterval);
        };
    }, []);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-orange-600">Few Fun Book Facts & Quotes</h1>

            <div className="w-full max-w-md mb-8 p-4 bg-white shadow rounded">
                <h2 className="text-xl font-semibold mb-2">Book Fact</h2>
                <p className="text-gray-700 mb-4">{currentFact}</p>
            </div>


        </div>
    );
};

export default BookFactsAndQuotes;
