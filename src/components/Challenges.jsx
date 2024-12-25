import React, { useState } from "react";

// Example challenge data
const challenges = [
    { id: 1, text: "Read a book by a female author", total: 5, completed: 0 },
    { id: 2, text: "Read a book set in your hometown", total: 5, completed: 0 },
    { id: 3, text: "Read a book that was published in the last year", total: 5, completed: 0 },
    { id: 4, text: "Read a classic novel", total: 5, completed: 0 },
    { id: 5, text: "Read a book that was adapted into a movie", total: 5, completed: 0 },
    { id: 6, text: "Read a book by an author you've never read before", total: 5, completed: 0 },
    { id: 7, text: "Read a book with a one-word title", total: 5, completed: 0 },
    { id: 8, text: "Read a book with an animal in the title", total: 5, completed: 0 },
    { id: 9, text: "Read a book with a color in the title", total: 5, completed: 0 },
    { id: 10, text: "Read a book that takes place in a different country", total: 5, completed: 0 },
    { id: 11, text: "Read a book with a character who shares your name", total: 5, completed: 0 },
    { id: 12, text: "Read a book from a genre you’ve never tried before", total: 5, completed: 0 },
    { id: 13, text: "Read a book with a red cover", total: 5, completed: 0 },
    { id: 14, text: "Read a book set in the future", total: 5, completed: 0 },
    { id: 15, text: "Read a biography or memoir", total: 5, completed: 0 },
    { id: 16, text: "Read a book about a historical event", total: 5, completed: 0 },
    { id: 17, text: "Read a book that has been on your shelf for over a year", total: 5, completed: 0 },
    { id: 18, text: "Read a book with magic or fantasy elements", total: 5, completed: 0 },
    { id: 19, text: "Read a non-fiction book about something you know little about", total: 5, completed: 0 },
    { id: 20, text: "Read a book that was published before 1900", total: 5, completed: 0 },
    { id: 21, text: "Read a book about mental health", total: 5, completed: 0 },
    { id: 22, text: "Read a book written by a person of color", total: 5, completed: 0 },
    { id: 23, text: "Read a book that made you cry", total: 5, completed: 0 },
    { id: 24, text: "Read a book with a number in the title", total: 5, completed: 0 },
    { id: 25, text: "Read a book by an author from your country", total: 5, completed: 0 },
    { id: 26, text: "Read a book with a map in it", total: 5, completed: 0 },
    { id: 27, text: "Read a book that’s over 500 pages", total: 5, completed: 0 },
    { id: 28, text: "Read a book with a twist ending", total: 5, completed: 0 },
    { id: 29, text: "Read a book that is part of a series", total: 5, completed: 0 },
    { id: 30, text: "Read a book with a strong female protagonist", total: 5, completed: 0 },
    { id: 31, text: "Read a book with a strong male protagonist", total: 5, completed: 0 },
    { id: 32, text: "Read a book by an author who is no longer alive", total: 5, completed: 0 },
    { id: 33, text: "Read a book with an unreliable narrator", total: 5, completed: 0 },
    { id: 34, text: "Read a book about the LGBTQIA+ community", total: 5, completed: 0 },
    { id: 35, text: "Read a book that was turned into a TV series", total: 5, completed: 0 },
    { id: 36, text: "Read a book with a red cover", total: 5, completed: 0 },
    { id: 37, text: "Read a book based on a true story", total: 5, completed: 0 },
    { id: 38, text: "Read a dystopian novel", total: 5, completed: 0 },
    { id: 39, text: "Read a book that was banned or challenged", total: 5, completed: 0 },
    { id: 40, text: "Read a graphic novel or comic book", total: 5, completed: 0 },
    { id: 41, text: "Read a book with a secret society", total: 5, completed: 0 },
    { id: 42, text: "Read a book with time travel", total: 5, completed: 0 },
    { id: 43, text: "Read a book from a country you’d like to visit", total: 5, completed: 0 },
    { id: 44, text: "Read a book recommended by a friend", total: 5, completed: 0 },
    { id: 45, text: "Read a book set during the holidays", total: 5, completed: 0 },
    { id: 46, text: "Read a book that was recommended by a famous author", total: 5, completed: 0 },
    { id: 47, text: "Read a book set in a small town", total: 5, completed: 0 },
    { id: 48, text: "Read a book with a love triangle", total: 5, completed: 0 },
    { id: 49, text: "Read a book written by a Nobel Prize winner", total: 5, completed: 0 },
    { id: 50, text: "Read a book by a local author", total: 5, completed: 0 },
    { id: 51, text: "Read a book with more than one author", total: 5, completed: 0 },
    { id: 52, text: "Read a book that’s been on a bestseller list", total: 5, completed: 0 },
    { id: 53, text: "Read a book written in verse or poetry", total: 5, completed: 0 },
    { id: 54, text: "Read a book with a diverse cast of characters", total: 5, completed: 0 },
    { id: 55, text: "Read a book with a mystery at its core", total: 5, completed: 0 },
    { id: 56, text: "Read a book with an unreliable narrator", total: 5, completed: 0 },
    { id: 57, text: "Read a book that explores social issues", total: 5, completed: 0 },
    { id: 58, text: "Read a book with an animal protagonist", total: 5, completed: 0 },
    { id: 59, text: "Read a book that is part of a subgenre (e.g., urban fantasy, steampunk)", total: 5, completed: 0 },
    { id: 60, text: "Read a book about space or the cosmos", total: 5, completed: 0 },
    { id: 61, text: "Read a book that explores the concept of family", total: 5, completed: 0 },
    { id: 62, text: "Read a book with a road trip or journey theme", total: 5, completed: 0 },
    { id: 63, text: "Read a book about a historical figure", total: 5, completed: 0 },
    { id: 64, text: "Read a novel with a plot twist", total: 5, completed: 0 },
    { id: 65, text: "Read a book with a multicultural perspective", total: 5, completed: 0 },
    { id: 66, text: "Read a book with a character who is a detective", total: 5, completed: 0 },
    { id: 67, text: "Read a book by an author who writes in a language other than English", total: 5, completed: 0 },
    { id: 68, text: "Read a book that’s won an award for its writing", total: 5, completed: 0 },
    { id: 69, text: "Read a book that’s part of a trilogy", total: 5, completed: 0 },
    { id: 70, text: "Read a book that tackles environmental issues", total: 5, completed: 0 },
    { id: 71, text: "Read a book with a haunted house or ghost theme", total: 5, completed: 0 },
    { id: 72, text: "Read a book that is considered a modern classic", total: 5, completed: 0 },
    { id: 73, text: "Read a self-help book", total: 5, completed: 0 },
    { id: 74, text: "Read a book with a focus on technology or AI", total: 5, completed: 0 },
    { id: 75, text: "Read a book by an indie author", total: 5, completed: 0 },
    { id: 76, text: "Read a book that has been adapted into a musical", total: 5, completed: 0 },
    { id: 77, text: "Read a book with a historical romance theme", total: 5, completed: 0 },
    { id: 78, text: "Read a book that focuses on self-discovery", total: 5, completed: 0 },
    { id: 79, text: "Read a book from a genre you thought you wouldn’t like", total: 5, completed: 0 },
    { id: 80, text: "Read a book with a character who is a writer", total: 5, completed: 0 },
    { id: 81, text: "Read a book that deals with addiction", total: 5, completed: 0 },
    { id: 82, text: "Read a book with a setting based on a real-life place", total: 5, completed: 0 },
    { id: 83, text: "Read a book with a coming-of-age theme", total: 5, completed: 0 },
    { id: 84, text: "Read a book about art or artists", total: 5, completed: 0 },
    { id: 85, text: "Read a book that takes place during the winter", total: 5, completed: 0 },
    { id: 86, text: "Read a book that takes place in the 1920s", total: 5, completed: 0 },
    { id: 87, text: "Read a book by a best-selling author", total: 5, completed: 0 },
    { id: 88, text: "Read a book that has been adapted into a play", total: 5, completed: 0 },
    { id: 89, text: "Read a book by a debut author", total: 5, completed: 0 },
    { id: 90, text: "Read a book with a plot about revenge", total: 5, completed: 0 },
    { id: 91, text: "Read a book that is over 100 years old", total: 5, completed: 0 },
    { id: 92, text: "Read a book that has been translated into multiple languages", total: 5, completed: 0 },
    { id: 93, text: "Read a book that takes place in the desert", total: 5, completed: 0 },
    { id: 94, text: "Read a book by a famous poet", total: 5, completed: 0 },
    { id: 95, text: "Read a book with a friendship theme", total: 5, completed: 0 },
    { id: 96, text: "Read a book with a story told in reverse order", total: 5, completed: 0 },
    { id: 97, text: "Read a book about an apocalypse or end of the world", total: 5, completed: 0 },
    { id: 98, text: "Read a book that’s been sitting on your wish list for a long time", total: 5, completed: 0 },
    { id: 99, text: "Read a book by a Nobel-winning author", total: 5, completed: 0 },
    { id: 100, text: "Read a book from a genre you usually avoid", total: 5, completed: 0 },
];


const Challenges = () => {
    const [completedChallenges, setCompletedChallenges] = useState([]);

    const handleCompleteChallenge = (id) => {
        if (!completedChallenges.includes(id)) {
            setCompletedChallenges([...completedChallenges, id]);
        }
    };

    const progress = (challenge) => {
        return (challenge.completed / challenge.total) * 100;
    };

    return (
        <div className="p-8 bg-[#F9C5D1] min-h-screen">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-teal-600">Reading Challenge</h1>
                <p className="text-gray-600 mt-2">
                    Join the challenge and track your reading progress.
                </p>
            </div>

            {/* Challenges Overview */}
            <div className="max-w-3xl mx-auto space-y-6">
                {challenges.map((challenge) => (
                    <div key={challenge.id} className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">{challenge.text}</h3>
                            <button
                                onClick={() => handleCompleteChallenge(challenge.id)}
                                disabled={completedChallenges.includes(challenge.id)}
                                className={`${completedChallenges.includes(challenge.id) ? "bg-gray-400" : "bg-teal-600"
                                    } text-white px-4 py-2 rounded-lg`}
                            >
                                {completedChallenges.includes(challenge.id) ? "Completed" : "Mark as Completed"}
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-teal-600 rounded-full"
                                style={{ width: `${progress(challenge)}%` }}
                            />
                        </div>
                        <div className="mt-2 text-gray-600">
                            {challenge.completed} / {challenge.total} books completed
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenges;
