
import { getCategories } from '@/lib/action/equipment';
import React from 'react';
import CategorySearchBar from '../components/CategorySearchBar';
import CategoryFilter from '../components/CategoryFilter';
import CategoryList from '../components/CategoryList ';

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
                        <CategoryList result={result} />

                    </main>

                </div>

            </div>

        </div>
    );
};

export default BrowseCategory;
