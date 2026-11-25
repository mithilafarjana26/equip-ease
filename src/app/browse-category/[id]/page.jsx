
import CardDetails from "@/app/components/CardDetails ";
import { getOneCategory } from "@/lib/action/equipment";
import Link from "next/link";

const CategoryCardDetails = async ({ params }) => {
    const { id } = await params;

    const result = await getOneCategory(`${id}`);

    if (!result) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">
                        Equipment Not Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        The equipment you are looking for is not available.
                    </p>

                    <Link
                        href="/browse-category"
                        className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-xl mt-5"
                    >
                        Browse Equipment
                    </Link>
                </div>
            </div>
        );
    }

    return <CardDetails equipment={result} />;
};

export default CategoryCardDetails;
