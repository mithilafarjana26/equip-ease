
'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    HardHat,
    UserRound,
    Mail,
    LockKeyhole,
    ArrowRight,
    Wrench,
    ShieldCheck,
    Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUp = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        setErrorMessage("");
        setIsLoading(true);

        try {

            const formData = new FormData(e.currentTarget);
            const users = Object.fromEntries(formData.entries());
            console.log(users)

            // Confirm Password Validation
            if (users.password !== users.confirmPassword) {
                setErrorMessage("Passwords do not match!");
                return;
            }

            // Better Auth Signup
            const { data, error } = await authClient.signUp.email({
                name: users?.name,
                email: users?.email,
                password: users?.password,
            });
            console.log(data)

            if (error) {
                setErrorMessage(error.message);
                return;
            }

            if (data) {
                router.push("/sign-in");
            }

        } catch (error) {
            console.log("Signup Error:", error);
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">

            <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-xl">

                {/* Left Side */}
                <div className="relative bg-[#172B4D] text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden">

                    <div className="absolute w-72 h-72 bg-blue-400/10 rounded-full -top-20 -right-20" />
                    <div className="absolute w-72 h-72 bg-indigo-400/10 rounded-full -bottom-32 -left-20" />

                    <div className="relative z-10">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl text-white">
                                <HardHat size={28} />
                            </div>

                            <span className="text-2xl font-bold">
                                Equip<span className="text-blue-400">Nest</span>
                            </span>
                        </Link>

                        <div className="mt-16">

                            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
                                Join Our Community
                            </p>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
                                Start Your
                                <span className="text-blue-400"> Journey </span>
                                With Us.
                            </h1>

                            <p className="text-slate-300 mt-6 leading-7 max-w-md">
                                Create your account and discover a smarter
                                way to rent equipment. Find reliable tools,
                                manage bookings and keep your projects moving.
                            </p>

                        </div>

                    </div>

                    {/* Equipment Image */}
                    <div className="relative z-10 my-10">

                        <div className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

                            <Image
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85"
                                alt="Construction equipment and worksite"
                                fill
                                priority
                                className="object-cover"
                                unoptimized
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/70 via-transparent to-transparent" />

                        </div>

                    </div>

                    {/* Bottom Features */}
                    <div className="relative z-10 flex items-center gap-6 flex-wrap">

                        <div className="flex items-center gap-2">
                            <Wrench size={18} className="text-blue-400" />
                            <span className="text-sm text-slate-300">
                                Quality Equipment
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <ShieldCheck size={18} className="text-blue-400" />
                            <span className="text-sm text-slate-300">
                                Trusted Rental
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Truck size={18} className="text-blue-400" />
                            <span className="text-sm text-slate-300">
                                Easy Booking
                            </span>
                        </div>

                    </div>

                </div>

                {/* Right Side - Sign Up Form */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">

                    <div className="max-w-md w-full mx-auto">

                        <div className="mb-7">
                            <h2 className="text-3xl font-bold text-slate-900">
                                Create Account
                            </h2>

                            <p className="text-slate-500 mt-2">
                                Sign up to get started with EquipNest.
                            </p>
                        </div>

                        {/* Sign Up Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

                            {/* Full Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Full Name
                                </Label>

                                <div className="relative">
                                    <UserRound
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <Input
                                        
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="h-11 pl-10 bg-slate-50"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    Email Address
                                </Label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <Input
                                       
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-11 pl-10 bg-slate-50"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password">
                                    Password
                                </Label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <Input
                                       
                                        name="password"
                                        type="password"
                                        placeholder="Create a password"
                                        className="h-11 pl-10 bg-slate-50"
                                        required
                                        minLength={8}
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">
                                    Confirm Password
                                </Label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        className="h-11 pl-10 bg-slate-50"
                                        required
                                        minLength={8}
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2 pt-1">

                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    required
                                    className="mt-1 accent-blue-600"
                                />

                                <Label
                                    htmlFor="terms"
                                    className="text-sm text-slate-600 leading-5"
                                >
                                    I agree to the{" "}
                                    <Link
                                        href="/terms"
                                        className="text-indigo-600 font-medium hover:underline"
                                    >
                                        Terms & Conditions
                                    </Link>
                                    {" "}and{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-indigo-600 font-medium hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </Label>

                            </div>

                            {/* Error Message */}
                            {errorMessage && (
                                <p className="text-sm text-red-500">
                                    {errorMessage}
                                </p>
                            )}

                            {/* Sign Up Button */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-11 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white font-bold"
                            >
                                {isLoading ? "Creating Account..." : "Create Account"}

                                {!isLoading && (
                                    <ArrowRight size={18} className="ml-2" />
                                )}
                            </Button>

                            {/* Google Button - UI Only */}
                            <Button
                                type="button"
                                variant="outline"
                                disabled={isLoading}
                                className="w-full h-11 border-slate-200 text-slate-700 hover:bg-indigo-50"
                            >
                                <svg viewBox="0 0 48 48" className="w-5 h-5 mr-2">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.73 7.18l7.66 5.94c4.48-4.14 7.11-10.25 7.11-17.59z" />
                                    <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.55 2.56 10.78l7.97-6.19z" />
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.66-5.94c-2.13 1.45-4.85 2.31-8.25 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                </svg>

                                Continue with Google
                            </Button>

                        </form>

                        {/* Sign In */}
                        <p className="text-center text-sm text-slate-500 mt-6">
                            Already have an account?{" "}
                            <Link
                                href="/sign-in"
                                className="text-indigo-600 font-semibold hover:text-violet-600 hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
