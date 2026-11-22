
'use client';

import React from 'react';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
import { Star, Quote } from 'lucide-react';

const Review = () => {

    const reviews = [
        {
            id: 1,
            name: 'Sarah Ahmed',
            role: 'Construction Manager',
            rating: 5,
            review: 'EquipNest made finding construction equipment so easy. The rental process was smooth, and the equipment quality was excellent.',
            initial: 'S',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            id: 2,
            name: 'Rakib Hasan',
            role: 'Small Business Owner',
            rating: 5,
            review: 'I saved a lot of money by renting instead of buying expensive tools. Great platform with a very user-friendly experience.',
            initial: 'R',
            color: 'bg-emerald-100 text-emerald-600',
        },
        {
            id: 3,
            name: 'Nusrat Jahan',
            role: 'Event Organizer',
            rating: 4,
            review: 'The flexible rental options helped me arrange everything for my event. I really appreciate how simple the booking process is.',
            initial: 'N',
            color: 'bg-pink-100 text-pink-600',
        },
        {
            id: 4,
            name: 'Tanvir Rahman',
            role: 'Freelance Photographer',
            rating: 5,
            review: 'Finding camera equipment for short-term projects was never this convenient. EquipNest is definitely a useful platform.',
            initial: 'T',
            color: 'bg-orange-100 text-orange-600',
        },
        {
            id: 5,
            name: 'Mehedi Hasan',
            role: 'Workshop Owner',
            rating: 5,
            review: 'Affordable prices and reliable equipment owners make this platform worth using. Highly recommended for anyone who needs tools.',
            initial: 'M',
            color: 'bg-violet-100 text-violet-600',
        },
        {
            id: 6,
            name: 'Ayesha Karim',
            role: 'Interior Designer',
            rating: 5,
            review: 'I found exactly what I needed without spending a fortune. The whole rental experience was convenient and hassle-free.',
            initial: 'A',
            color: 'bg-amber-100 text-amber-600',
        },
    ];

    return (
        <section className="overflow-hidden bg-slate-50 py-20 md:py-24">

            <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">

                    <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                        Customer Stories
                    </span>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                        What Our Customers
                        <span className="text-blue-600"> Say</span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">
                        Discover what our customers think about their rental experience.
                        Your satisfaction is what drives us forward.
                    </p>

                </div>

                {/* Review Marquee */}
                <div className="relative">

                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-50 to-transparent md:w-28"></div>

                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent md:w-28"></div>

                    <MarqueeText duration={45} direction="left">

                        <div className="flex gap-6 py-5">

                            {reviews.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-[360px]"
                                >

                                    {/* Top Section */}
                                    <div className="mb-5 flex items-center justify-between">

                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                                            <Quote size={23} />
                                        </div>

                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    fill={i < item.rating ? '#FBBF24' : 'none'}
                                                    className={i < item.rating ? 'text-amber-400' : 'text-slate-200'}
                                                />
                                            ))}
                                        </div>

                                    </div>

                                    {/* Review Text */}
                                    <p className="min-h-[112px] text-sm leading-7 text-slate-600">
                                        "{item.review}"
                                    </p>

                                    {/* Divider */}
                                    <div className="my-6 border-t border-slate-100"></div>

                                    {/* Customer Info */}
                                    <div className="flex items-center gap-3">

                                        <div className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold ${item.color}`}>
                                            {item.initial}
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">
                                                {item.name}
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-400">
                                                {item.role}
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </MarqueeText>

                </div>

                {/* Bottom Text */}
                <div className="mt-10 text-center">
                    <p className="text-sm font-medium text-slate-500">
                        Making equipment rentals easier, one happy customer at a time.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Review;
