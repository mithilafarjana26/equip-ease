
import { getApplication } from '@/lib/action/equipment';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import ApplicantTable from './components/applicant-table';

const MyRentalPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const result = await getApplication(
        `applicantId=${session?.user.id}`
    );

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        My Rentals
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Manage and track all your equipment rental applications.
                    </p>
                </div>

                {/* Table Card */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">
                                Rental Applications
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Your rental application history
                            </p>
                        </div>

                        <span className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-lg text-sm font-semibold">
                            {result?.length || 0} Applications
                        </span>
                    </div>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">

                        <table className="w-full text-left">

                            <thead className="bg-gray-50/80">
                                <tr className="text-xs uppercase tracking-wider text-gray-500">
                                    <th className="px-6 py-4 font-semibold">Equipment</th>
                                    <th className="px-6 py-4 font-semibold">Category</th>
                                    <th className="px-6 py-4 font-semibold">Location</th>
                                    <th className="px-6 py-4 font-semibold">Rental Price</th>
                                    <th className="px-6 py-4 font-semibold">Duration</th>
                                    <th className="px-6 py-4 font-semibold">Delivery</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {result?.length > 0 ? (
                                    result.map((application) => (
                                        <ApplicantTable
                                            key={application._id}
                                            application={application}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-16">
                                            <p className="text-4xl mb-3">📦</p>
                                            <h3 className="text-gray-800 font-semibold">
                                                No Rental Applications Found
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-2">
                                                You haven't applied for any equipment rental yet.
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyRentalPage;
