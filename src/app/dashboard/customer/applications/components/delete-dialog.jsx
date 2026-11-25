
'use client'

import { useState } from "react";
import { Trash2Icon, AlertTriangle } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteApplicant } from "@/lib/action/equipment";

const DeleteDialog = ({ item }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    if (!item) return null;

    const handleDeleteCategory = async () => {
        try {
            setLoading(true);

            const result = await deleteApplicant(item._id);
console.log(result)
            if (result.deletedCount > 0) {
                router.refresh();
            }
        } catch (error) {
            console.error("Delete failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl"
                    >
                        <Trash2Icon size={18} />
                    </Button>
                }
            />

            <AlertDialogContent className="bg-white rounded-2xl border border-gray-100 shadow-xl max-w-[420px]">

                <AlertDialogHeader className="items-center text-center">

                    {/* Warning Icon */}
                    <AlertDialogMedia className="bg-red-50 text-red-500 size-16 rounded-2xl">
                        <AlertTriangle size={30} />
                    </AlertDialogMedia>

                    <AlertDialogTitle className="text-xl font-bold text-gray-800">
                        Delete Rental Application?
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-sm text-gray-500 leading-6">
                        Are you sure you want to delete your application for
                        <span className="font-semibold text-gray-800">
                            {" "}{item.equipmentName}
                        </span>?

                        This action cannot be undone.
                    </AlertDialogDescription>

                </AlertDialogHeader>

                {/* Equipment Info */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl">

                    <img
                        src={item.image}
                        alt={item.equipmentName}
                        className="w-14 h-14 object-cover rounded-lg"
                    />

                    <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-gray-800 truncate">
                            {item.equipmentName}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                            {item.brand} · {item.model}
                        </p>

                        <p className="text-xs text-cyan-600 font-semibold mt-1">
                            ৳{Number(item.rentalPrice).toLocaleString("en-BD")} / {item.rentalType}
                        </p>
                    </div>

                </div>

                {/* Warning Message */}
                <div className="flex gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
                    <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />

                    <p className="text-xs text-red-600 leading-5">
                        Once deleted, this rental application will be permanently removed.
                    </p>
                </div>

                {/* Buttons */}
                <AlertDialogFooter className="flex-row gap-3 sm:justify-center">

                    <AlertDialogCancel
                        disabled={loading}
                        className="flex-1 rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={handleDeleteCategory}
                        disabled={loading}
                        className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white"
                    >
                        {loading ? (
                            "Deleting..."
                        ) : (
                            <>
                                <Trash2Icon size={16} className="mr-2" />
                                Delete
                            </>
                        )}
                    </AlertDialogAction>

                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteDialog;
