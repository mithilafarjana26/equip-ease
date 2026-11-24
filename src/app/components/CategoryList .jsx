
"use client";

import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ result }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleCategories = showAll
        ? result
        : result.slice(0, 7);

    return (
        <>
            <div className="flex flex-col gap-4">

                {result.length > 0 ? (
                    visibleCategories.map((category) => (
                        <CategoryCard
                            key={category._id}
                            category={category}
                        />
                    ))
                ) : (
                    <div className="bg-white rounded-2xl border p-10 text-center">
                        <h2 className="text-lg font-semibold text-gray-700">
                            No Equipment Found
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Try changing your search or filters.
                        </p>
                    </div>
                )}

            </div>

            {result.length > 7 && (
                <div className="flex justify-center mt-8">

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-sm"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>

                </div>
            )}
        </>
    );
};

export default CategoryList;
