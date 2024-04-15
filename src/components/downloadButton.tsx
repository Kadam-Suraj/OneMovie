import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export const DownloadButton = ({ item, idx }) => {
    return (
        <div key={idx} className='flex flex-col items-center justify-center gap-2'>
            <Link to={item.link} className="w-ft">
                <Button
                    onClick={() => {
                        toast({
                            title: "Thank You For Downloading.",
                            description: "Hope You Enjoyed Our Service",
                        });
                    }}
                    className='flex gap-2 pr-1'
                >
                    <span>
                        {item.title || item.number}
                    </span>
                    | <span className='bg-white text-black dark:bg-black dark:text-white rounded-md px-2 py-1'>
                        {item.size || "Size Not Available"}
                    </span>
                </Button>
            </Link>
        </div >
    )
}