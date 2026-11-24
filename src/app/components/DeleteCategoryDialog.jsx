
'use client'

import { Trash2Icon } from "lucide-react"

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
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { deleteCategory } from "@/lib/action/equipment"

const DeleteCategoryDialog = ({ item }) => {

    const router = useRouter()

    const handleDeleteCategory = async () => {
        const result = await deleteCategory(item._id)
        console.log(result)

        if (result.deletedCount > 0) {
            router.refresh()
        }
    }

    if (!item) return null

    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={
                    <Button variant="destructive" size="icon">
                        <Trash2Icon />
                    </Button>
                }
            />

            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>

                    <AlertDialogTitle>
                        Delete {item.equipmentName}?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete {item.equipmentName}.
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={handleDeleteCategory}
                        variant="destructive"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteCategoryDialog
