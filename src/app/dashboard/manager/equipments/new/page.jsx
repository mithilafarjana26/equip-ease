
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    ArrowRight,
    MapPin,
    Package,
    CircleDollarSign,
    ImagePlus,
    Tag,
    Box,
    CalendarDays,
    ShieldCheck,
    Truck,
    Clock,
    Link as LinkIcon,
    RotateCcw,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";
import { createCategories } from "@/lib/action/equipment";
// import { createEquipment } from "@/lib/action/equipment";

const AddEquipment = () => {

    const { data: session } = useSession();

    const [rentalType, setRentalType] = useState("Daily");
    const [condition, setCondition] = useState("Good");
    const [category, setCategory] = useState("");
    const [delivery, setDelivery] = useState("Available");
    const [minDuration, setMinDuration] = useState("1 Day");

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const status = "Pending";

    const rentalTypes = ["Daily", "Weekly", "Monthly"];

    const conditions = [
        "Brand New",
        "Like New",
        "Good",
        "Fair",
        "Used",
    ];

    const categories = [
        { label: "Camera & Photography", value: "camera" },
        { label: "Construction Equipment", value: "construction" },
        { label: "Agriculture", value: "agriculture" },
        { label: "Vehicles & Transportation", value: "vehicles" },
        { label: "Electronics", value: "electronics" },
        { label: "Event Equipment", value: "event" },
    ];

    // Submit Equipment
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!category) {
            alert("Please select a category");
            return;
        }

        if (!image.trim()) {
            alert("Please provide an equipment image URL");
            return;
        }

        try {

            setLoading(true);

            const formData = new FormData(e.currentTarget);

            const equipmentData = Object.fromEntries(
                formData.entries()
            );

            const finalData = {
                ...equipmentData,
                category,
                rentalType,
                condition,
                delivery,
                minDuration,
                status,
                quantity: Number(equipmentData.quantity),
                rentalPrice: Number(equipmentData.rentalPrice),
                securityDeposit: Number(equipmentData.securityDeposit || 0),
                managerId: session?.user?.id,
                managerEmail: session?.user?.email,
            };

            console.log("New Equipment:", finalData);

            const result = await createCategories(finalData);
            console.log(result)

            if (result.insertedId) {
                alert("Equipment added successfully!");
              
                setImage("");
                setCategory("");
            }

        } catch (error) {

            console.error("Equipment Submit Error:", error);
            alert("Something went wrong!");

        } finally {
            setLoading(false);
        }
    };


    return (

        <div className="min-h-screen w-full bg-gray-50 text-gray-900 p-4 md:p-6 lg:p-8">

            <div className="max-w-6xl w-full mx-auto">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

                    <div>
                        <p className="text-xs text-gray-500 mb-2">
                            Dashboard / <span className="text-indigo-600">Add Equipment</span>
                        </p>

                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                            Add New Equipment
                        </h1>

                        <p className="text-sm text-gray-500 mt-2 max-w-xl">
                            Create a new equipment listing by providing all the necessary
                            information. Your listing will be reviewed before becoming available.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">

                        <Button
                            type="reset"
                            form="equipment-form"
                            variant="outline"
                            className="rounded-xl border-gray-300"
                            onClick={() => {
                                setImage("");
                                setCategory("");
                                setRentalType("Daily");
                                setCondition("Good");
                                setDelivery("Available");
                                setMinDuration("1 Day");
                            }}
                        >
                            <RotateCcw className="size-4 mr-2" />
                            Reset
                        </Button>

                        <Button
                            type="submit"
                            form="equipment-form"
                            disabled={loading}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6"
                        >
                            {loading ? "Publishing..." : "Publish Equipment"}
                            <ArrowRight className="ml-2 size-4" />
                        </Button>

                    </div>

                </div>


                <form
                    id="equipment-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* Section 1: Basic Information */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 space-y-6 shadow-sm">

                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                                1. Basic Information
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Provide the basic information about your equipment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="space-y-2 md:col-span-2">
                                <Label>
                                    Equipment Name <span className="text-indigo-600">*</span>
                                </Label>

                                <Input
                                    name="equipmentName"
                                    placeholder="e.g. Canon EOS 90D DSLR Camera"
                                    required
                                    className="h-11 bg-gray-50 border-gray-200"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label>
                                    Description <span className="text-indigo-600">*</span>
                                </Label>

                                <Textarea
                                    name="description"
                                    required
                                    placeholder="Describe your equipment, features, specifications and usage..."
                                    className="min-h-36 bg-gray-50 border-gray-200 resize-y"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>
                                    Equipment Category <span className="text-indigo-600">*</span>
                                </Label>

                                <Select
                                    value={category}
                                    onValueChange={setCategory}
                                    required
                                >
                                    <SelectTrigger className="w-full h-11 bg-gray-50 border-gray-200">
                                        <SelectValue placeholder="Select equipment category" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {categories.map((item) => (
                                            <SelectItem
                                                key={item.value}
                                                value={item.value}
                                            >
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>
                                    Location <span className="text-indigo-600">*</span>
                                </Label>

                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 size-4 text-gray-400" />

                                    <Input
                                        name="location"
                                        placeholder="e.g. Mirpur, Dhaka"
                                        required
                                        className="pl-10 h-11 bg-gray-50 border-gray-200"
                                    />
                                </div>
                            </div>

                        </div>

                    </section>


                    {/* Section 2: Rental Information */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 space-y-6 shadow-sm">

                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                                2. Rental Information
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Set your rental pricing and availability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                            <div className="space-y-2">
                                <Label>
                                    Rental Price <span className="text-indigo-600">*</span>
                                </Label>

                                <div className="relative">
                                    <CircleDollarSign className="absolute left-3 top-3 size-4 text-gray-400" />

                                    <Input
                                        name="rentalPrice"
                                        type="number"
                                        min="1"
                                        placeholder="e.g. 500"
                                        required
                                        className="pl-10 h-11 bg-gray-50 border-gray-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>
                                    Available Quantity <span className="text-indigo-600">*</span>
                                </Label>

                                <div className="relative">
                                    <Box className="absolute left-3 top-3 size-4 text-gray-400" />

                                    <Input
                                        name="quantity"
                                        type="number"
                                        min="1"
                                        placeholder="e.g. 5"
                                        required
                                        className="pl-10 h-11 bg-gray-50 border-gray-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Security Deposit</Label>

                                <div className="relative">
                                    <ShieldCheck className="absolute left-3 top-3 size-4 text-gray-400" />

                                    <Input
                                        name="securityDeposit"
                                        type="number"
                                        min="0"
                                        placeholder="e.g. 2000"
                                        className="pl-10 h-11 bg-gray-50 border-gray-200"
                                    />
                                </div>
                            </div>

                        </div>


                        {/* Rental Type */}
                        <div className="space-y-3">

                            <Label>
                                Rental Type <span className="text-indigo-600">*</span>
                            </Label>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                                {rentalTypes.map((type) => (

                                    <Button
                                        key={type}
                                        type="button"
                                        variant="outline"
                                        onClick={() => setRentalType(type)}
                                        className={`h-11 rounded-xl ${
                                            rentalType === type
                                                ? "bg-indigo-50 border-indigo-600 text-indigo-700"
                                                : "bg-gray-50 border-gray-200 text-gray-600"
                                        } hover:bg-indigo-50 hover:text-indigo-700`}
                                    >
                                        <CalendarDays className="size-4 mr-2" />
                                        {type}
                                    </Button>

                                ))}

                            </div>

                        </div>


                        {/* Minimum Rental Duration */}
                        <div className="space-y-2 max-w-md">

                            <Label>Minimum Rental Duration</Label>

                            <Select
                                value={minDuration}
                                onValueChange={setMinDuration}
                            >
                                <SelectTrigger className="w-full h-11 bg-gray-50 border-gray-200">
                                    <SelectValue placeholder="Select minimum duration" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="1 Day">1 Day</SelectItem>
                                    <SelectItem value="2 Days">2 Days</SelectItem>
                                    <SelectItem value="3 Days">3 Days</SelectItem>
                                    <SelectItem value="1 Week">1 Week</SelectItem>
                                    <SelectItem value="1 Month">1 Month</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>

                    </section>


                    {/* Section 3: Equipment Details */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 space-y-6 shadow-sm">

                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                                3. Equipment Details
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Add equipment condition and product specifications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="space-y-2">
                                <Label>
                                    Equipment Condition <span className="text-indigo-600">*</span>
                                </Label>

                                <Select
                                    value={condition}
                                    onValueChange={setCondition}
                                >
                                    <SelectTrigger className="w-full h-11 bg-gray-50 border-gray-200">
                                        <SelectValue placeholder="Select condition" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {conditions.map((item) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Brand</Label>

                                <Input
                                    name="brand"
                                    placeholder="e.g. Canon, Sony, Bosch"
                                    className="h-11 bg-gray-50 border-gray-200"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Model</Label>

                                <div className="relative">
                                    <Tag className="absolute left-3 top-3 size-4 text-gray-400" />

                                    <Input
                                        name="model"
                                        placeholder="e.g. EOS 90D"
                                        className="pl-10 h-11 bg-gray-50 border-gray-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Included Accessories</Label>

                                <Input
                                    name="accessories"
                                    placeholder="e.g. Battery, Charger, Bag"
                                    className="h-11 bg-gray-50 border-gray-200"
                                />
                            </div>

                        </div>

                    </section>


                    {/* Section 4: Equipment Image */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 space-y-5 shadow-sm">

                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                                4. Equipment Image
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Paste your ImgBB image link to display your equipment image.
                            </p>
                        </div>

                        <div className="space-y-2">

                            <Label>
                                Equipment Image URL <span className="text-indigo-600">*</span>
                            </Label>

                            <div className="relative">
                                <LinkIcon className="absolute left-3 top-3 size-4 text-gray-400" />

                                <Input
                                    name="image"
                                    type="url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://i.ibb.co/your-image-link.jpg"
                                    required
                                    className="pl-10 h-12 bg-gray-50 border-gray-200"
                                />
                            </div>

                            <p className="text-xs text-gray-400">
                                Upload your image to ImgBB first, then copy and paste the direct image URL here.
                            </p>

                        </div>


                        {/* Image Preview */}
                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-4 md:p-6 bg-gray-50">

                            {image ? (

                                <div className="space-y-3">

                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-700">
                                            Image Preview
                                        </p>

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setImage("")}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            Remove
                                        </Button>
                                    </div>

                                    <img
                                        src={image}
                                        alt="Equipment Preview"
                                        className="w-full max-h-80 object-contain rounded-xl bg-white border border-gray-200"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                        onLoad={(e) => {
                                            e.currentTarget.style.display = "block";
                                        }}
                                    />

                                </div>

                            ) : (

                                <div className="min-h-44 flex flex-col items-center justify-center text-center gap-3">

                                    <div className="bg-indigo-50 p-4 rounded-full">
                                        <ImagePlus className="size-9 text-indigo-500" />
                                    </div>

                                    <div>
                                        <p className="font-medium text-gray-700">
                                            No image added yet
                                        </p>

                                        <p className="text-xs text-gray-400 mt-1">
                                            Your equipment image preview will appear here.
                                        </p>
                                    </div>

                                </div>

                            )}

                        </div>

                    </section>


                    {/* Section 5: Delivery Information */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 space-y-5 shadow-sm">

                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                                5. Delivery Information
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Let customers know about your equipment delivery options.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="space-y-2">

                                <Label>Delivery Availability</Label>

                                <Select
                                    value={delivery}
                                    onValueChange={setDelivery}
                                >
                                    <SelectTrigger className="w-full h-11 bg-gray-50 border-gray-200">
                                        <SelectValue placeholder="Select delivery option" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="Available">
                                            Delivery Available
                                        </SelectItem>

                                        <SelectItem value="Not Available">
                                            Pickup Only
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>

                            <div className="space-y-2">

                                <Label>Delivery Charge (৳)</Label>

                                <div className="relative">
                                    <Truck className="absolute left-3 top-3 size-4 text-gray-400" />

                                    <Input
                                        name="deliveryCharge"
                                        type="number"
                                        min="0"
                                        placeholder="e.g. 100"
                                        className="pl-10 h-11 bg-gray-50 border-gray-200"
                                    />
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* Section 6: Terms & Conditions */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 space-y-5 shadow-sm">

                        <div>
                            <h2 className="font-semibold text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                                6. Rental Terms & Conditions
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Set your rental policies and conditions for customers.
                            </p>
                        </div>

                        <div className="space-y-2">

                            <Label>
                                Rental Terms and Conditions <span className="text-indigo-600">*</span>
                            </Label>

                            <Textarea
                                name="terms"
                                required
                                placeholder="Write your rental terms, security deposit, return policy, damage policy, late return charges etc..."
                                className="min-h-40 bg-gray-50 border-gray-200 resize-y"
                            />

                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-indigo-50 border border-indigo-100 rounded-xl p-4">

                            <div className="flex items-center gap-3">

                                <div className="bg-indigo-100 p-2.5 rounded-lg">
                                    <Clock className="size-5 text-indigo-600" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        Equipment Approval Status
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Your equipment will be reviewed by the admin.
                                    </p>
                                </div>

                            </div>

                            <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full w-fit">
                                {status}
                            </span>

                        </div>

                    </section>


                    {/* Final Submit */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8">

                        <p className="text-xs text-gray-500">
                            * Please complete all required fields before submitting.
                        </p>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-8 h-12"
                        >
                            {loading ? "Submitting..." : "Submit Equipment"}

                            <ArrowRight className="ml-2 size-4" />
                        </Button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddEquipment;
