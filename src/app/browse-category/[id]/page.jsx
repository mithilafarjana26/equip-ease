
import { getOneCategory } from '@/lib/action/equipment';
import Link from 'next/link';
import React from 'react';

const CategoryCardDetails = async ({ params }) => {
    const { id } = await params;
    const result = await getOneCategory(`${id}`);

    if (!result) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Equipment Not Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        The equipment you are looking for is not available.
                    </p>
                    <Link
                        href="/browse-category"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl mt-5 transition"
                    >
                        Browse Equipment
                    </Link>
                </div>
            </div>
        );
    }

    const {
        equipmentName,
        description,
        location,
        rentalPrice,
        securityDeposit,
        brand,
        model,
        accessories,
        image,
        deliveryCharge,
        terms,
        category,
        rentalType,
        condition,
        delivery,
        minDuration,
        quantity,
    } = result;

    const formatPrice = (amount) =>
        Number(amount || 0).toLocaleString('en-BD');

    const equipmentDetails = [
        { label: 'Brand', value: brand },
        { label: 'Model', value: model },
        { label: 'Category', value: category },
        { label: 'Condition', value: condition },
        { label: 'Rental Type', value: rentalType },
        { label: 'Minimum Duration', value: minDuration },
        { label: 'Available Quantity', value: quantity },
        {
            label: 'Delivery Charge',
            value: `৳${formatPrice(deliveryCharge)}`
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 py-8 md:py-12 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Page Heading */}
                <div className="mb-7">

                    <Link
                        href="/browse-category"
                        className="text-sm text-gray-500 hover:text-cyan-600 transition"
                    >
                        ← Back to equipment
                    </Link>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-5">
                        {equipmentName}
                    </h1>

                    <p className="text-gray-500 text-sm mt-2">
                        📍 {location}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">

                        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-2 rounded-full">
                            {condition} Condition
                        </span>

                        <span className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-2 rounded-full">
                            {delivery === 'Available'
                                ? '✓ Delivery Available'
                                : 'Pickup Required'}
                        </span>

                        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-2 rounded-full">
                            {rentalType} Rental
                        </span>

                        <span className="text-green-600 text-xs font-medium px-2 py-2">
                            ✓ Detailed Information
                        </span>

                    </div>
                </div>


                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_310px] gap-7 items-start">

                    {/* Left Content */}
                    <div className="space-y-5">

                        {/* Equipment Image */}
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

                            <div className="h-[280px] sm:h-[400px] md:h-[450px] flex items-center justify-center p-4">

                                {image ? (
                                    <img
                                        src={image}
                                        alt={equipmentName}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                ) : (
                                    <div className="text-gray-400 text-center">
                                        <p className="text-5xl mb-3">📦</p>
                                        <p>No equipment image available</p>
                                    </div>
                                )}

                            </div>

                        </div>


                        {/* Description */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                Description
                            </h2>

                            <p className="text-gray-600 text-sm leading-7">
                                {description}
                            </p>

                            <div className="mt-5 pt-4 border-t border-gray-100">
                                <p className="text-sm text-gray-500 leading-7">
                                    A convenient and cost-effective rental
                                    solution for your projects. Rent the
                                    equipment you need without the expense
                                    of purchasing and maintaining it permanently.
                                </p>
                            </div>

                        </div>


                        {/* Good To Know */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-gray-900 mb-6">
                                Good to know
                            </h2>

                            <div className="space-y-6">

                                <div>
                                    <p className="text-xs text-cyan-600 font-bold uppercase tracking-wider mb-2">
                                        What's included
                                    </p>

                                    <p className="text-sm text-gray-600 leading-6">
                                        {accessories ||
                                            'Standard equipment accessories are included.'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-cyan-600 font-bold uppercase tracking-wider mb-2">
                                        Best for
                                    </p>

                                    <p className="text-sm text-gray-600 leading-6">
                                        Professional projects, temporary work
                                        and personal equipment needs.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-cyan-600 font-bold uppercase tracking-wider mb-2">
                                        Rental duration
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        Minimum rental period: {minDuration}
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Equipment Details */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-gray-900 mb-5">
                                Equipment Details
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {equipmentDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-100 pb-3"
                                    >
                                        <p className="text-xs text-gray-500 mb-2">
                                            {item.label}
                                        </p>

                                        <p className="text-sm text-gray-800 font-semibold capitalize">
                                            {item.value || 'Not specified'}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* Terms & Conditions */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                Terms & Conditions
                            </h2>

                            <p className="text-sm text-gray-600 leading-7">
                                {terms ||
                                    'Please handle the equipment carefully and return it within the agreed rental period.'}
                            </p>

                            <div className="mt-5 p-4 bg-cyan-50 border border-cyan-100 rounded-xl">

                                <p className="text-sm text-cyan-800 font-semibold">
                                    Rental Reminder
                                </p>

                                <p className="text-xs text-gray-600 mt-2 leading-6">
                                    Please check the equipment condition before
                                    accepting delivery. Return all accessories
                                    together with the equipment.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Booking Sidebar */}
                    <aside className="lg:sticky lg:top-24">

                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-lg">

                            {/* Price */}
                            <div className="pb-5 border-b border-gray-100">

                                <h2 className="text-3xl font-bold text-gray-900">
                                    ৳{formatPrice(rentalPrice)}

                                    <span className="text-sm font-normal text-gray-500 ml-2">
                                        / day
                                    </span>
                                </h2>

                                <p className="text-xs text-gray-500 mt-2">
                                    Affordable equipment rental for your needs
                                </p>

                            </div>


                            {/* Price Breakdown */}
                            <div className="space-y-4 py-5">

                                <div className="flex justify-between gap-3 text-sm">
                                    <span className="text-gray-500">
                                        Rental fee
                                    </span>

                                    <span className="text-gray-800 font-medium">
                                        ৳{formatPrice(rentalPrice)}/day
                                    </span>
                                </div>

                                <div className="flex justify-between gap-3 text-sm">
                                    <span className="text-gray-500">
                                        Service fee
                                    </span>

                                    <span className="text-gray-800 text-right">
                                        5% at checkout
                                    </span>
                                </div>

                                <div className="flex justify-between gap-3 text-sm">
                                    <span className="text-gray-500">
                                        Security deposit
                                    </span>

                                    <span className="text-gray-800 font-medium">
                                        ৳{formatPrice(securityDeposit)}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-3 text-sm">
                                    <span className="text-gray-500">
                                        Delivery charge
                                    </span>

                                    <span className="text-gray-800">
                                        ৳{formatPrice(deliveryCharge)}
                                    </span>
                                </div>

                            </div>


                            {/* Deposit Info */}
                            <p className="text-xs text-gray-500 leading-5 mb-5">
                                Security deposit is refundable after the
                                rental is completed and the equipment is
                                returned without any issues.
                            </p>


                            {/* Booking Button */}
                            <Link
                                href="/sign-up"
                                className="flex items-center justify-center w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3.5 rounded-xl transition duration-300"
                            >
                                Sign up to book
                            </Link>


                            {/* Cancellation Policy */}
                            <div className="mt-5 border border-gray-200 rounded-xl p-4">

                                <h3 className="text-xs font-bold text-gray-800 mb-4 uppercase tracking-wide">
                                    Cancellation Policy
                                </h3>

                                <div className="space-y-3 text-xs text-gray-600 leading-5">

                                    <p className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>
                                            Free cancellation within 24 hours
                                            of booking if rental starts 24+
                                            hours away.
                                        </span>
                                    </p>

                                    <p className="flex gap-2">
                                        <span className="text-gray-400">•</span>
                                        <span>
                                            After the grace period,
                                            cancellations may receive a
                                            partial refund.
                                        </span>
                                    </p>

                                    <p className="flex gap-2">
                                        <span className="text-amber-500">!</span>
                                        <span>
                                            Cancellations within 24 hours
                                            of rental start are non-refundable.
                                        </span>
                                    </p>

                                    <p className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>
                                            Owner cancellations always result
                                            in a full refund.
                                        </span>
                                    </p>

                                </div>

                            </div>


                            {/* Footer */}
                            <div className="text-center mt-5">
                                <p className="text-xs text-gray-400">
                                    Secure booking experience
                                </p>
                            </div>

                        </div>

                    </aside>

                </div>

            </div>

        </div>
    );
};

export default CategoryCardDetails;
