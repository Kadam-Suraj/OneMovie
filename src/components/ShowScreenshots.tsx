import { Suspense, lazy, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getScreenshots } from '@/api/client'
import { motion } from 'framer-motion'

// Code splitting using React.lazy
const LazyImage = lazy(() => import('./LazyImage'))

const ShowScreenshots = () => {
    const [screenshots, setScreenshots] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        const fetchScreenshots = async () => {
            const screenshots = await getScreenshots(slug)
            setScreenshots(screenshots)
        }

        fetchScreenshots()
    }, [slug])

    return (
        <div className="flex flex-col items-center w-10/12 md:w-[60%]">
            {screenshots.length > 0 ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="grid gap-5 lg:grid-cols-2">
                        {screenshots.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 * idx }}
                                key={idx}
                            >
                                <LazyImage src={item} alt={`screenshot${idx}`} />
                            </motion.div>
                        ))}
                    </div>
                </Suspense>
            ) : (
                <h1>ScreenShots Not Available</h1>
            )}
        </div>
    )
}

export default ShowScreenshots
