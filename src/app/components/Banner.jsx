
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const Banner = () => {

    const titleWords = [
        { text: 'Find', gradient: false },
        { text: 'the', gradient: false },
        { text: 'Gear.', gradient: true },
        { text: 'Make', gradient: false },
        { text: 'It', gradient: true },
        { text: 'Happen.', gradient: true },
    ];

    // Typing Animation
    const [textCount, setTextCount] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const fullText = titleWords.map(word => word.text).join(' ');

    useEffect(() => {
        let timeout;

        if (!deleting && textCount === fullText.length) {
            timeout = setTimeout(() => {
                setDeleting(true);
            }, 1800);
        }
        else if (deleting && textCount === 0) {
            timeout = setTimeout(() => {
                setDeleting(false);
            }, 500);
        }
        else {
            timeout = setTimeout(() => {
                setTextCount(prev => deleting ? prev - 1 : prev + 1);
            }, deleting ? 55 : 110);
        }

        return () => clearTimeout(timeout);

    }, [textCount, deleting, fullText]);

    return (
        <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-white px-5 py-24">

            {/* Background Gradient */}
            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-5xl text-center">

                {/* Small Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-600"
                >
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    Your Trusted Equipment Rental Marketplace
                </motion.div>

                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex min-h-[100px] flex-wrap justify-center gap-x-3 gap-y-1 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:min-h-[120px] sm:text-5xl md:min-h-[170px] md:text-7xl"
                >
                    {(() => {
                        let charIndex = 0;

                        return titleWords.map((word, index) => {
                            const start = charIndex;
                            charIndex += word.text.length + 1;

                            const visibleLength = Math.max(
                                0,
                                Math.min(word.text.length, textCount - start)
                            );

                            if (visibleLength === 0) return null;

                            const isCurrentWord =
                                textCount > start &&
                                textCount <= start + word.text.length;

                            return (
                                <span
                                    key={index}
                                    className={
                                        word.gradient
                                            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent'
                                            : ''
                                    }
                                >
                                    {word.text.slice(0, visibleLength)}

                                    {isCurrentWord && (
                                        <span className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-1 animate-pulse bg-indigo-500" />
                                    )}
                                </span>
                            );
                        });
                    })()}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
                >
                    Access the equipment you need, exactly when you need it.
                    Explore a wide range of tools and machinery or turn your
                    unused equipment into an earning opportunity.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/all-equipment"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40 sm:w-auto"
                    >
                        Explore Equipment
                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>

                    <Link
                        href="/sign-in"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 sm:w-auto"
                    >
                        <Plus size={18} />
                        List Your Equipment
                    </Link>
                </motion.div>

                {/* Bottom Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="mt-8 text-sm text-slate-400"
                >
                    Rent smarter • Save more • Earn with what you own
                </motion.p>

            </div>
        </section>
    );
};

export default Banner;
