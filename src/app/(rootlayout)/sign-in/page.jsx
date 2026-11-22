
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import {
    LockKeyhole,
    Mail,
    ArrowRight,
} from 'lucide-react';

import { authClient } from '@/lib/auth-client';

const SignIn = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        setErrorMessage('');
        setIsLoading(true);

        try {

            const formData = new FormData(e.currentTarget);
            const users = Object.fromEntries(formData.entries());

            // Better Auth Sign In
            const { data, error } = await authClient.signIn.email({
                email: users.email,
                password: users.password,
                rememberMe: users.remember === 'on',
            });

            if (error) {
                setErrorMessage(error.message);
                return;
            }

            if (data) {
                router.push('/');
                router.refresh();
            }

        } catch (error) {

            console.log('Sign In Error:', error);
            setErrorMessage('Something went wrong. Please try again.');

        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-white">

            {/* Left Side - Sign In Form */}
            <div className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">

                <div className="w-full max-w-md">

                    {/* Logo */}
                    <Link href="/" className="inline-flex items-center gap-2 mb-12">

                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-2 rounded-xl">
                            <LockKeyhole size={23} />
                        </div>

                        <span className="text-2xl font-bold text-gray-900">
                            Equip<span className="text-indigo-600">Nest</span>
                        </span>

                    </Link>

                    {/* Heading */}
                    <div className="mb-8">

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Welcome Back!
                        </h1>

                        <p className="text-gray-500">
                            Sign in to manage your rentals and explore equipment.
                        </p>

                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="space-y-2">

                            <Label htmlFor="email" className="text-gray-700">
                                Email Address
                            </Label>

                            <div className="relative">

                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-12 pl-10 rounded-lg border-gray-200 focus-visible:ring-indigo-500"
                                    required
                                    disabled={isLoading}
                                />

                            </div>

                        </div>

                        {/* Password */}
                        <div className="space-y-2">

                            <div className="flex justify-between items-center">

                                <Label htmlFor="password" className="text-gray-700">
                                    Password
                                </Label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-indigo-600 hover:text-violet-600 font-medium"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            <div className="relative">

                                <LockKeyhole
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="h-12 pl-10 rounded-lg border-gray-200 focus-visible:ring-indigo-500"
                                    required
                                    disabled={isLoading}
                                />

                            </div>

                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                className="accent-indigo-600 w-4 h-4"
                                disabled={isLoading}
                            />

                            <Label
                                htmlFor="remember"
                                className="text-sm text-gray-500 cursor-pointer"
                            >
                                Remember me
                            </Label>

                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <p className="text-sm text-red-500">
                                {errorMessage}
                            </p>
                        )}

                        {/* Sign In Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white rounded-lg text-base font-semibold"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}

                            {!isLoading && (
                                <ArrowRight size={18} className="ml-2" />
                            )}

                        </Button>

                        {/* Divider */}
                        <div className="flex items-center gap-4 py-2">

                            <div className="h-px bg-gray-200 flex-1" />

                            <span className="text-sm text-gray-400">
                                Or continue with
                            </span>

                            <div className="h-px bg-gray-200 flex-1" />

                        </div>

                        {/* Google Button - UI Only */}
                        <Button
                            type="button"
                            variant="outline"
                            disabled={isLoading}
                            className="w-full h-12 rounded-lg border-gray-200 hover:bg-indigo-50"
                        >

                            <svg
                                viewBox="0 0 48 48"
                                className="w-5 h-5 mr-2"
                            >
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />

                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.73 7.18l7.66 5.94c4.48-4.14 7.11-10.25 7.11-17.59z" />

                                <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.55 2.56 10.78l7.97-6.19z" />

                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.66-5.94c-2.13 1.45-4.85 2.31-8.25 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            </svg>

                            Continue with Google

                        </Button>

                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-gray-500 mt-8">

                        Don't have an account?{' '}

                        <Link
                            href="/sign-up"
                            className="text-indigo-600 font-semibold hover:text-violet-600 hover:underline"
                        >
                            Create an account
                        </Link>

                    </p>

                </div>

            </div>

            {/* Right Side - Equipment Image */}
            <div className="hidden lg:block relative min-h-screen bg-gray-900">

                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85"
                    alt="Construction equipment and worksite"
                    fill
                    priority
                    className="object-cover"
                    unoptimized
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Image Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-12 xl:p-16 text-white">

                    <div className="flex justify-end">

                        <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
                            Equipment Rental Made Easy
                        </span>

                    </div>

                    <div className="max-w-lg">

                        <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">
                            Build Better. Rent Smarter.
                        </span>

                        <h2 className="text-4xl xl:text-5xl font-bold leading-tight mt-4 mb-5">
                            The Right Equipment,
                            <span className="text-blue-400"> Every Time.</span>
                        </h2>

                        <p className="text-gray-200 text-lg leading-relaxed">
                            Find the tools and heavy equipment you need.
                            Book smarter, save time, and keep your projects
                            moving forward.
                        </p>

                        <div className="flex gap-3 mt-8">

                            <div className="w-12 h-1 bg-blue-500 rounded-full" />
                            <div className="w-5 h-1 bg-white/50 rounded-full" />
                            <div className="w-5 h-1 bg-white/50 rounded-full" />

                        </div>

                    </div>

                    <p className="text-gray-300 text-sm">
                        © 2026 EquipNest. All rights reserved.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default SignIn;
