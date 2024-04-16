import { getEpisodes } from "@/api/client"
import { useEffect, useState } from "react"
import { DownloadButton } from "../downloadButton"

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
                                                    item.episodes?.map((link: any, idx: any) => {
                                                        return (
                                                            <div key={idx} className='grid gap-8'>
                                                                <h2 className="text-center font-semibold text-xl">{link?.title}</h2>
                                                                {
                                                                    link.hd &&
                                                                    <div className='flex flex-col items-center gap-5'>
                                                                        <h2 className='text-lg font-semibold'>Episodes in 720P</h2>
                                                                        <div className='flex gap-2 items-center justify-center flex-wrap'>
                                                                            {link.hd && link.hd.map((item: any, idx: any) => (
                                                                                <DownloadButton key={idx} item={item} idx={idx} />
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                }
                                                                <div>
                                                                    {
                                                                        link.fhd &&
                                                                        <div className='flex flex-col items-center gap-5'>
                                                                            <h2 className='text-lg font-semibold'>Episodes in 1080P</h2>
                                                                            <div className='flex gap-2 items-center justify-center flex-wrap'>
                                                                                {link.fhd && link.fhd.map((item: any, idx: any) => (
                                                                                    <DownloadButton key={idx} item={item} idx={idx} />
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {
                                                                        link.uhd &&
                                                                        <div className='flex flex-col items-center gap-5'>
                                                                            <h2 className='text-lg font-semibold'>Episodes in 2160P/4K</h2>
                                                                            <div className='flex gap-2 items-center justify-center flex-wrap'>
                                                                                {link.uhd && link.uhd.map((item: any, idx: any) => (
                                                                                    <DownloadButton key={idx} item={item} idx={idx} />
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