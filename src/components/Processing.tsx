import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Processing = () => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mx-auto gap-3 mt-10 px-3 py-2 bg-red-600 w-fit rounded-full" >
                <span className='w-8 h-8 border-2 border-red-400 rounded-full relative flex justify-center items-center'>
                    <AiOutlineLoading3Quarters className="animate-spin w-8 h-8 absolute text-white rounded-full" />
                </span>
                <span className='text-white'>
                    Processing...
                </span>
            </motion.div>
        </AnimatePresence>
    )
}

export default Processing