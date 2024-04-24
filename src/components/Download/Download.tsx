import { getInfo } from '@/api/client'
import { useEffect, useState } from 'react'
import Episodes from '../Episodes/Episodes'
import DownloadsLink from './DownloadsLink'
import { FiDownloadCloud } from "react-icons/fi";

const Download = ({ slug }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getInfo())
            setData(data)
        })()
    }, [slug])

    return (
        <>
            <div className='flex flex-col gap-10 pt-10 border-t'>
                <div className='flex items-center gap-5 bg-accent text-accent-foreground py-1 px-6 rounded-full w-fit'>
                    <FiDownloadCloud className='text-xl'/>
                    <h3 className='font-semibold text-xl text-cente'>Downloads Section:</h3>
                </div>
                <div className='md:w-1/2 mx-auto'>
                    {
                        data.map((item, idx) => {
                            if (item.slug.current == slug) {
                                return <div key={idx} className='flex flex-col items-center'>
                                    {!item.episodes && !item.download ? <h2>Downloads Will Available Soon</h2> : null
                                        // <span className='flex items-center gap-2 text-xl font-semibold text-white dark:text-black bg-black dark:bg-white rounded-md py-1 px-3 '><CiWarning className='text-2xl text-yellow-500 animate-bounce'/>Use Brave Browser</span>
                                    }
                                    {item.episodes ? <Episodes slug={slug} /> : null}
                                    {item.download ? <DownloadsLink slug={slug} /> : null}
                                </div>
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Download