
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Search } from "lucide-react";

const CategorySearchBar = () => {

    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const search = data.searchField;

        const params = new URLSearchParams();

        if (search.trim()) {
            params.set("search", search.trim());
        }

        router.push(`/browse-category?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
            <div className="flex items-center gap-3">

                {/* Search Input */}
                <div className="relative flex-1">

                    <Search
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        name="searchField"
                        placeholder="Search equipment by name, brand..."
                        className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />

                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="h-12 shrink-0 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Search
                </button>

            </div>
        </form>
    );
};

export default CategorySearchBar;
