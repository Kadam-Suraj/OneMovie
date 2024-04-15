import { getDownloads } from '@/api/client'
import { useEffect, useState } from 'react'
import { DownloadButton } from '../downloadButton'

const DownloadsLink = ({ slug }) => {
    const [data, setData] = useState([])

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
                                                    {link.hd && link.hd.map((item: any, idx: any) => (
                                                         <DownloadButton key={idx} item={item} idx={idx} />
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
                                                <div className='flex flex-col items-center gap-2'>
                                                    <h2 className='text-xl'>Download 2160P/4K</h2>
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
                </div>
            })
        }</div >
    )
}

export default DownloadsLink

