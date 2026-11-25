'use client'
import React from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { createApplication, getApplicationCount } from "@/lib/action/equipment";

const CardDetails = ({ equipment }) => {
     const {data:session,isPending} = useSession()
    const router=useRouter()
    const {
        _id,
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
    } = equipment;

    const formatPrice = (amount) =>
        Number(amount || 0).toLocaleString("en-BD");

    const equipmentDetails = [
        { label: "Brand", value: brand },
        { label: "Model", value: model },
        { label: "Category", value: category },
        { label: "Condition", value: condition },
        { label: "Rental Type", value: rentalType },
        { label: "Minimum Duration", value: minDuration },
        { label: "Available Quantity", value: quantity },
        {
            label: "Delivery Charge",
            value: `৳${formatPrice(deliveryCharge)}`,
        },
    ];


          if(isPending){
  return <span className="loading loading-ball loading-xl"></span>

}

const handleBook = async() =>{
 if(!session?.user){
    router.push(`/sign-in?redirectTo=/browse-category/${equipment._id}`)
    return
}

else if(session?.user?.role==='customer'){
            const countResult = await getApplicationCount(`applicantId=${session?.user.id}`)


            if(countResult.count>=3){
 router.push('/dashboard/customer/payment')
    return
}


    else{
        const application = {


    categoryId: equipment._id,
     userId:session?.user?.id,
        name:session?.user?.name,
        email:session?.user?.email,
    equipmentName: equipmentName,
    description: description,
    location: location,
    rentalPrice: rentalPrice,
    securityDeposit: securityDeposit,
    brand: brand,
    model: model,
    accessories: accessories,
    image: image,
    deliveryCharge: deliveryCharge,
    terms: terms,
    category: category,
    rentalType: rentalType,
    condition: condition,
    delivery: delivery,
    minDuration: minDuration,
    quantity: quantity,
    status: "applied",
};
console.log('application',application)
     const res = await createApplication(application)
    console.log(res)
    }
}






}

    return (
        <div className="min-h-screen bg-white text-gray-900 py-8 md:py-12 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="mb-7">
                    <Link
                        href="/browse-category"
                        className="text-sm text-gray-500 hover:text-cyan-600"
                    >
                        ← Back to equipment
                    </Link>

                    <h1 className="text-2xl md:text-3xl font-bold mt-5">
                        {equipmentName}
                    </h1>

                    <p className="text-gray-500 text-sm mt-2">
                        📍 {location}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-2 rounded-full">
                            {condition} Condition
                        </span>

                        <span className="bg-cyan-50 text-cyan-700 text-xs px-3 py-2 rounded-full">
                            {delivery === "Available"
                                ? "✓ Delivery Available"
                                : "Pickup Required"}
                        </span>

                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-2 rounded-full">
                            {rentalType} Rental
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_310px] gap-7 items-start">

                    {/* Left Content */}
                    <div className="space-y-5">

                        {/* Image */}
                        <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                            <div className="h-[280px] sm:h-[400px] md:h-[450px] flex items-center justify-center p-4">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={equipmentName}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                ) : (
                                    <p className="text-gray-400">
                                        No equipment image available
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
                            <h2 className="text-lg font-bold mb-4">
                                Description
                            </h2>

                            <p className="text-gray-600 text-sm leading-7">
                                {description}
                            </p>
                        </div>

                        {/* Good To Know */}
                        <div className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
                            <h2 className="text-lg font-bold mb-6">
                                Good to know
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-cyan-600 font-bold uppercase mb-2">
                                        What's included
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {accessories || "Standard equipment accessories are included."}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-cyan-600 font-bold uppercase mb-2">
                                        Best for
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Professional projects, temporary work and personal equipment needs.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-cyan-600 font-bold uppercase mb-2">
                                        Rental duration
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Minimum rental period: {minDuration}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Equipment Details */}
                        <div className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
                            <h2 className="text-lg font-bold mb-5">
                                Equipment Details
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {equipmentDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-b pb-3"
                                    >
                                        <p className="text-xs text-gray-500 mb-2">
                                            {item.label}
                                        </p>

                                        <p className="text-sm font-semibold capitalize">
                                            {item.value || "Not specified"}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
                            <h2 className="text-lg font-bold mb-4">
                                Terms & Conditions
                            </h2>

                            <p className="text-sm text-gray-600 leading-7">
                                {terms || "Please handle the equipment carefully and return it within the agreed rental period."}
                            </p>

                            <div className="mt-5 p-4 bg-cyan-50 border border-cyan-100 rounded-xl">
                                <p className="text-sm text-cyan-800 font-semibold">
                                    Rental Reminder
                                </p>
                                <p className="text-xs text-gray-600 mt-2 leading-6">
                                    Please check the equipment condition before accepting delivery. Return all accessories together with the equipment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <aside className="lg:sticky lg:top-24">
                        <div className="bg-white border rounded-2xl p-5 shadow-lg">

                            <div className="pb-5 border-b">
                                <h2 className="text-3xl font-bold">
                                    ৳{formatPrice(rentalPrice)}
                                    <span className="text-sm font-normal text-gray-500 ml-2">
                                        / day
                                    </span>
                                </h2>
                                <p className="text-xs text-gray-500 mt-2">
                                    Affordable equipment rental for your needs
                                </p>
                            </div>

                            <div className="space-y-4 py-5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Rental fee</span>
                                    <span>৳{formatPrice(rentalPrice)}/day</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Service fee</span>
                                    <span>5% at checkout</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Security deposit</span>
                                    <span>৳{formatPrice(securityDeposit)}</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Delivery charge</span>
                                    <span>৳{formatPrice(deliveryCharge)}</span>
                                </div>
                            </div>

                            <p className="text-xs text-gray-500 leading-5 mb-5">
                                Security deposit is refundable after the rental is completed and the equipment is returned without any issues.
                            </p>

                          <button
    
    onClick={handleBook}
    className="flex items-center justify-center w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3.5 rounded-xl transition duration-300"
>
    Book Now
</button>

                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
