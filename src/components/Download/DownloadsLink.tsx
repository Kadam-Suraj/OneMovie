import { getDownloads } from '@/api/client'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

const DownloadsLink = ({ slug }) => {
    const [data, setData] = useState([])
    const { toast } = useToast()

    useEffect(() => {
        (async () => {
            const data = (await getDownloads(slug))
            setData(data)
        })()
    }, [])

    return (
        <div>{
            data.map((item, idx) => {
                return <div key={idx}>
                    <div className='flex flex-col gap-16 divide-y w-full'>
                        {
                            item.download?.map((link: any, idx: any) => {
                                return (
                                    <div key={idx} className='grid gap-10'>
                                        {
                                            link.hd &&
                                            <div className='flex flex-col items-center gap-2'>
                                                <h2 className='text-xl'>Download 720P</h2>
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
                                                                        {hdItem.title} | {hdItem.size || "Size Not Available"}
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
                                                    <h2 className='text-xl'>Download 1080P</h2>
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
                                                                            {fhdItem.title} | {fhdItem.size || "Size Not Available"}
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
                                                    <h2 className='text-xl'>Download 2160P/4K</h2>
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
                                                                            {uhdItem.title} | {uhdItem.size || "Size Not Available"}
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
                </div>
            })
        }</div >
    )
}

export default DownloadsLink