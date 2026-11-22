
'use client';

import React from 'react';
import {
    Wallet,
    ShieldCheck,
    CalendarDays,
    CreditCard,
    ArrowUpRight
} from 'lucide-react';

const ChooseUs = () => {

    const benefits = [
        {
            id: 1,
            icon: Wallet,
            title: 'Budget-Friendly Rentals',
            description: 'Get access to quality equipment at affordable prices without the burden of purchasing expensive tools.',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            id: 2,
            icon: ShieldCheck,
            title: 'Verified Equipment Owners',
            description: 'Rent with confidence from trusted owners. We prioritize reliable listings and genuine equipment providers.',
            color: 'bg-emerald-50 text-emerald-600',
        },
        {
            id: 3,
            icon: CalendarDays,
            title: 'Flexible Rental Periods',
            description: 'Choose rental durations that fit your schedule, whether you need equipment for a day, a week, or longer.',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            id: 4,
            icon: CreditCard,
            title: 'Secure Payments',
            description: 'Enjoy a smooth and reliable payment experience with a secure checkout process for every rental.',
            color: 'bg-violet-50 text-violet-600',
        },
    ];

    return (
        <section className="bg-slate-50 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">

                    <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                        Why EquipNest?
                    </span>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                        Renting Equipment
                        <span className="text-blue-600"> Made Easier</span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">
                        We make equipment rental simple, affordable, and reliable.
                        Everything you need to get your work done, all in one place.
                    </p>
                </div>

                {/* Benefit Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
                            >

                                {/* Number */}
                                <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                                    0{item.id}
                                </span>

                                {/* Icon */}
                                <div className={`relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                                    <Icon size={27} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 text-lg font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-7 text-slate-500">
                                    {item.description}
                                </p>

                                {/* Bottom Arrow */}
                                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        EquipNest Benefits
                                    </span>

                                    <ArrowUpRight
                                        size={19}
                                        className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                                    />
                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* Bottom Banner */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-blue-600 px-8 py-8 text-center md:flex-row md:px-12 md:text-left">

                    <div>
                        <h3 className="text-xl font-bold text-white md:text-2xl">
                            Ready to rent smarter?
                        </h3>
                        <p className="mt-2 text-sm text-blue-100">
                            Find the right equipment for your next project.
                        </p>
                    </div>

                    <a
                        href="/all-equipment"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 transition-all duration-300 hover:bg-slate-100"
                    >
                        Explore Equipment
                        <ArrowUpRight size={17} />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default ChooseUs;
