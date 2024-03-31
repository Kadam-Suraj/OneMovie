import { Skeleton } from "./ui/skeleton";

const SkeletonComponent = () => {
    return (
        <div className="lg:px-10">
            <div className="w-full select-none md:min-h-[650px]">
                <div className="w-full">
                    <div>
                        <div className="p-1">
                            <div>
                                <div className="flex lg:justify-center p-6">
                                    <div className="grid gap-5 lg:grid-cols-2 w-full">
                                        <div className="flex flex-col gap-5 justify-center w-full">
                                            <div className="flex gap-5 items-center lg:w-1/2 rounded-full px-1 py-1 h-5 w-full">
                                                <Skeleton className="h-8 w-1/2" />
                                            </div>
                                            <Skeleton className="h-36 w-10/12" />
                                            <div className="flex gap-5 items-center">
                                                <Skeleton className="h-5 w-20" />
                                                <Skeleton className="h-5 w-20" />
                                                <Skeleton className="h-5 w-20" />
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <Skeleton className="h-5 w-20" />
                                                <Skeleton className="h-5 w-20" />
                                                <Skeleton className="h-5 w-20" />
                                            </div>
                                            <Skeleton className="h-10" />
                                            <Skeleton className="h-5 w-36" />
                                            <Skeleton className="h-5 w-36" />
                                            <Skeleton className="h-5 w-36" />
                                        </div>
                                        <div className="flex items-center -order-1 lg:order-1 justify-center lg:justify-end">
                                            <Skeleton className="h-96 md:w-1/2 w-8/12" />
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
