import React from "react";

const Profile = () => {
    const goals = [
        { id: 1, goal: "Read 10 books this month", completed: false },
        { id: 2, goal: "Explore 5 new genres", completed: true },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-orange-600">Reading Challenge 2024</h1>
                <p className="text-gray-700 mt-2">Set your goals, track your reads, and achieve greatness!</p>
            </div>

            {/* Progress Tracker */}
            <div className="flex flex-col items-center mb-12">
                <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full animate-pulse" />
                    <span className="text-3xl font-bold text-gray-800">45%</span>
                </div>
                <p className="mt-4 text-gray-800">Books Read: 9 / 20</p>
            </div>

            {/* Current Book */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
                <h2 className="text-2xl font-semibold mb-4">Current Book</h2>
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Current Book"
                        className="w-20 h-28 rounded-md shadow-md mr-4"
                    />
                    <div>
                        <h3 className="font-bold text-lg">The Great Gatsby</h3>
                        <p className="text-gray-600">by F. Scott Fitzgerald</p>
                        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                            <div className="bg-orange-500 h-3 rounded-full" style={{ width: "60%" }} />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Page 120 of 200</p>
                    </div>
                </div>
            </div>

            {/* Goals */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Challenge Goals</h2>
                <ul>
                    {goals.map((goal) => (
                        <li
                            key={goal.id}
                            className="flex items-center mb-3"
                        >
                            <input
                                type="checkbox"
                                checked={goal.completed}
                                className="mr-2 w-5 h-5 text-orange-500"
                                readOnly
                            />
                            <span
                                className={`text-gray-800 ${goal.completed ? "line-through" : ""}`}
                            >
                                {goal.goal}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Achievements */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
                <div className="flex gap-4">
                    <div className="bg-orange-300 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold">1</span>
                    </div>
                    <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold">5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
