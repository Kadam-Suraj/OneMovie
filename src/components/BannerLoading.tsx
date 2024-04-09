import { Skeleton } from "./ui/skeleton";

const SkeletonComponent = () => {
    return (
        <div className="lg:px-10 py-5">
            <div className="w-full select-none md:min-h-[610px]">
                <div className="w-full">
                    <div>
                        <div className="p-1">
                            <div>
                                <div className="flex lg:justify-center min-[300px]:p-6">
                                    <div className="grid gap-5 lg:grid-cols-2 w-full">
                                        <div className="flex flex-col gap-5 justify-center w-full">
                                            <div className="flex gap-5 items-center lg:w-1/2 rounded-full px-1 py-1 h-5 w-full">
                                                <Skeleton className="h-6 w-1/2 rounded-full" />
                                            </div>
                                            <Skeleton className="h-8 w-10/12 rounded-full" />
                                            <div className="flex gap-5 items-center flex-wrap">
                                                <Skeleton className="h-5 w-20 rounded-full" />
                                                <Skeleton className="h-5 w-20 rounded-full" />
                                                <Skeleton className="h-5 w-20 rounded-full" />
                                            </div>
                                            <div className="flex gap-5 items-center flex-wrap">
                                                <Skeleton className="h-5 w-20 rounded-full" />
                                                <Skeleton className="h-5 w-20 rounded-full" />
                                                <Skeleton className="h-5 w-20 rounded-full" />
                                            </div>
                                            <Skeleton className="h-8 w-32 rounded-full" />
                                            <Skeleton className="h-5 w-36 rounded-full" />
                                            <Skeleton className="h-5 w-36 rounded-full" />
                                            <Skeleton className="h-5 w-36 rounded-full" />
                                        </div>
                                        <div className="flex items-center -order-1 lg:order-1 justify-center lg:justify-end">
                                            <Skeleton className="h-80 md:h-96 sm:w-1/2 w-48" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonComponent;
