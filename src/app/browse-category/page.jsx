
import { getCategories } from '@/lib/action/equipment';
import React from 'react';
import CategorySearchBar from '../components/CategorySearchBar';
import CategoryFilter from '../components/CategoryFilter';
import CategoryCard from '../components/CategoryCard';

const BrowseCategory = async ({ searchParams }) => {

    const search = await searchParams;

    const queryString = new URLSearchParams(search).toString();

    const result = await getCategories(queryString);

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 py-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Sidebar - Category Filter */}
                    <aside className="lg:col-span-3">
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                            <CategoryFilter />
                        </div>
                    </aside>

                    {/* Right Side - Search & Equipment */}
                    <main className="lg:col-span-9">

                        {/* Search Bar */}
                        <div className="mb-6">
                            <CategorySearchBar />
                        </div>

                        {/* Heading */}
                        <div className="mb-5">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Browse Equipment
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                Total Equipment: {result.length}
                            </p>
                        </div>

                        {/* Equipment Cards */}
                        <div className="flex flex-col gap-4">

                            {result.length > 0 ? (
                                result.map((category) => (
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

                    </main>

                </div>

            </div>

        </div>
    );
};

export default BrowseCategory;
