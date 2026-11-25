import React from 'react';
import {
    ArrowLeft,
    LockKeyhole,
    CreditCard,
    Clock3,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';

const CustomerPayment = async({searchParams}) => {
     const { canceled } = await searchParams

  if (canceled) {
    console.log(
      'Order canceled -- continue to shop around and check out when you\'re ready.'
    )
  }
    return (
        <div className="min-h-screen bg-[#09090b] text-white px-4 py-8 md:px-8">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <button className="text-gray-400 hover:text-white transition">
                            <ArrowLeft size={20} />
                        </button>

                        <div className="w-9 h-9 rounded-md bg-[#27272a] flex items-center justify-center">
                            <LockKeyhole size={17} className="text-gray-300" />
                        </div>
                    </div>

                    <span className="text-[10px] font-semibold tracking-wider bg-[#27272a] px-2 py-1 rounded">
                        SANDBOX
                    </span>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

                    {/* Left Side - Plan Details */}
                    <div>

                        {/* Currency Selection */}
                        <div className="mb-8">

                            <p className="text-[10px] text-gray-400 font-semibold tracking-widest mb-3">
                                CHOOSE A CURRENCY:
                            </p>

                            <div className="grid grid-cols-2 gap-2">

                                <button className="flex items-center gap-2 border border-white rounded-md px-3 py-3 text-sm bg-[#18181b]">
                                    <span>🇧🇩</span>
                                    <span className="font-medium">BDT 2,553.33</span>
                                </button>

                                <button className="flex items-center gap-2 border border-[#27272a] hover:border-gray-500 rounded-md px-3 py-3 text-sm text-gray-400 transition">
                                    <span>🇺🇸</span>
                                    <span>$50.00</span>
                                </button>

                            </div>

                            <p className="text-[9px] text-gray-500 italic mt-2">
                                1 USD = 127.6565 BDT
                            </p>

                        </div>

                        <div className="border-t border-[#27272a] pt-5">

                            <div className="flex items-center justify-between gap-3">

                                <div>
                                    <h2 className="text-base font-semibold">
                                        Hireloop Pro Plan
                                    </h2>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Access to all features
                                    </p>
                                </div>

                                <p className="text-sm font-semibold whitespace-nowrap">
                                    BDT 50.00
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Right Side - Payment Form */}
                    <div>

                        {/* Link Payment */}
                        <button className="w-full h-11 bg-[#00d084] hover:bg-[#00bd78] text-black rounded-md flex items-center justify-center gap-2 transition">

                            <span className="text-xs font-bold">
                                ● link
                            </span>

                            <span className="bg-blue-700 text-white text-[9px] font-bold px-2 py-1 rounded">
                                VISA
                            </span>

                            <span className="text-xs font-semibold">
                                4242
                            </span>

                        </button>

                        {/* OR Divider */}
                        <div className="flex items-center gap-3 my-5">
                            <div className="h-px bg-[#27272a] flex-1" />
                            <span className="text-[9px] text-gray-500">OR</span>
                            <div className="h-px bg-[#27272a] flex-1" />
                        </div>


                        {/* Contact Information */}
                        <div className="mb-5">

                            <h3 className="text-sm font-semibold mb-3">
                                Contact information
                            </h3>

                            <label className="block text-[10px] text-gray-400 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full h-11 bg-[#1c1c1f] border border-[#29292e] rounded-md px-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition"
                            />

                        </div>


                        {/* Payment Method */}
                        <div>

                            <h3 className="text-sm font-semibold mb-3">
                                Payment method
                            </h3>

                            <div className="border border-[#29292e] rounded-lg overflow-hidden">

                                {/* Card Header */}
                                <div className="flex items-center gap-2 bg-[#1c1c1f] px-3 py-3 border-b border-[#29292e]">
                                    <CreditCard size={15} className="text-gray-300" />
                                    <span className="text-xs font-medium">
                                        Card
                                    </span>
                                </div>

                                <div className="p-3 space-y-4">

                                    {/* Card Information */}
                                    <div>
                                        <label className="block text-[9px] text-gray-400 font-medium tracking-wider mb-2">
                                            CARD INFORMATION
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="1234 1234 1234 1234"
                                            className="w-full h-10 bg-[#1c1c1f] border border-[#303036] rounded-t-md px-3 text-xs outline-none focus:border-blue-500"
                                        />

                                        <div className="grid grid-cols-2">

                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                className="w-full h-10 bg-[#1c1c1f] border border-[#303036] border-t-0 rounded-bl-md px-3 text-xs outline-none focus:border-blue-500"
                                            />

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="CVC"
                                                    className="w-full h-10 bg-[#1c1c1f] border border-[#303036] border-t-0 border-l-0 rounded-br-md px-3 text-xs outline-none focus:border-blue-500"
                                                />

                                                <Clock3
                                                    size={13}
                                                    className="absolute right-3 top-3 text-gray-500"
                                                />
                                            </div>

                                        </div>
                                    </div>


                                    {/* Cardholder Name */}
                                    <div>
                                        <label className="block text-[9px] text-gray-400 font-medium tracking-wider mb-2">
                                            CARDHOLDER NAME
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Full name on card"
                                            className="w-full h-10 bg-[#1c1c1f] border border-[#303036] rounded-md px-3 text-xs outline-none focus:border-blue-500"
                                        />
                                    </div>


                                    {/* Country */}
                                    <div>
                                        <label className="block text-[9px] text-gray-400 font-medium tracking-wider mb-2">
                                            COUNTRY OR REGION
                                        </label>

                                        <select
                                            defaultValue="Bangladesh"
                                            className="w-full h-10 bg-[#1c1c1f] border border-[#303036] rounded-md px-3 text-xs text-white outline-none focus:border-blue-500"
                                        >
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="United States">United States</option>
                                            <option value="India">India</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Save Information */}
                        <div className="mt-4 border border-[#29292e] rounded-lg p-3 flex items-start gap-3">

                            <input
                                type="checkbox"
                                className="mt-0.5 accent-blue-600"
                            />

                            <div>
                                <p className="text-xs font-medium">
                                    Save my information for faster checkout
                                </p>

                                <p className="text-[9px] text-gray-500 mt-1 leading-4">
                                    Pay securely on this site and everywhere Link is accepted.
                                </p>
                            </div>

                        </div>


                        {/* Pay Button */}
                        {/* <button className="w-full h-11 mt-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition shadow-lg shadow-blue-600/10">
                            Pay BDT 20.00
                        </button> */}

{/* stripe payment btn */}


 <form action="/api/checkout_sessions" method="POST">
      <section>


<button type="submit" role="link" className="w-full h-11 mt-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition shadow-lg shadow-blue-600/10">
                            Pay BDT 50.00
                        </button>

        
      </section>
    </form>






















                        {/* Security Footer */}
                        <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-500">
                            <ShieldCheck size={13} />
                            <span>Secure and encrypted payment</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CustomerPayment;