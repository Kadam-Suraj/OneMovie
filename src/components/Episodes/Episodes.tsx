import { getEpisodes } from "@/api/client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"

const Episodes = ({ slug }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getEpisodes(slug))
            setData(data)
        })()
    }, [])

    return (
        <>
            <div>
                {
                    data.map((item, idx) => {
                        return <div key={idx}>
                            {
                                item.episodes ?
                                    <div className='flex flex-col gap-5 items-center'>
                                        {
                                            <div className='flex flex-col gap-16 divide-y w-full'>
                                                {
                                                    item.episodes.map((link: any, idx: any) => {
                                                        return (
                                                            <div key={idx} className='grid gap-10'>
                                                                {
                                                                    link.hd &&
                                                                    <div className='flex flex-col items-center gap-2'>
                                                                        <h2 className='text-xl'>Download Episode 720P</h2>
                                                                        <div className='flex gap-2 items-center justify-center flex-wrap'>
                                                                            {link.hd && link.hd.map((hdItem: any, idx: any) => (
                                                                                <div key={idx} className='flex flex-col items-center justify-center gap-2'>
                                                                                    <div>
                                                                                        <Link to={hdItem.link} className="w-ft">
                                                                                            <Button
                                                                                                onClick={() => {
                                                                                                    toast({
                                                                                                        title: "Thank You For Downloading.",
                                                                                                        description: "Hope You Enjoyed Our Service",
                                                                                                    });
                                                                                                }}
                                                                                                className=''
                                                                                            >
                                                                                                {hdItem.number} | {hdItem.size || "Size Not Available"}
                                                                                            </Button>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                }
                                                                <div>
                                                                    {
                                                                        link.fhd &&
                                                                        <div className='flex flex-col items-center gap-2'>
                                                                            <h2 className='text-xl'>Download Episode 1080P</h2>
                                                                            <div className='flex gap-2 items-center justify-center flex-wrap'>
                                                                                {link.fhd && link.fhd.map((fhdItem: any, idx: any) => (
                                                                                    <div key={idx} className='flex flex-col items-center justify-center gap-2'>
                                                                                        <div>
                                                                                            <Link to={fhdItem.link} className="w-ft">
                                                                                                <Button
                                                                                                    onClick={() => {
                                                                                                        toast({
                                                                                                            title: "Thank You For Downloading.",
                                                                                                            description: "Hope You Enjoyed Our Service",
                                                                                                        });
                                                                                                    }}
                                                                                                    className=''
                                                                                                >
                                                                                                    {fhdItem.number} | {fhdItem.size || "Size Not Available"}
                                                                                                </Button>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {
                                                                        link.uhd &&
                                                                        <div className='flex flex-col items-center gap-2'>
                                                                            <h2 className='text-xl'>Download Episode 2160P/4K</h2>
                                                                            <div className='flex gap-2 items-center justify-center flex-wrap'>
                                                                                {link.uhd && link.uhd.map((uhdItem: any, idx: any) => (
                                                                                    <div key={idx} className='flex flex-col items-center justify-center gap-2'>
                                                                                        <div>
                                                                                            <Link to={uhdItem.link} className="w-ft">
                                                                                                <Button
                                                                                                    onClick={() => {
                                                                                                        toast({
                                                                                                            title: "Thank You For Downloading.",
                                                                                                            description: "Hope You Enjoyed Our Service",
                                                                                                        });
                                                                                                    }}
                                                                                                    className=''
                                                                                                >
                                                                                                    {uhdItem.number} | {uhdItem.size || "Size Not Available"}
                                                                                                </Button>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                    : <div key={idx} className='text-center text-xl'>Downloads Will Available Soon</div>
                            }
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Episodes