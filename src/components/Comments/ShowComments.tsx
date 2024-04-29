import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getComments } from "@/api/client";

const ShowComments = ({ slug, update }) => {
    const [data, setData] = useState([]);
    const firstCommentRef = useRef(null);

    const fetchComments = async () => {
        const newData = await getComments(slug);
        setData(newData);
    };

    useEffect(() => {
        fetchComments();
    }, [slug, update]);

    useEffect(() => {
        // Scroll to the bottom when new comments are fetched and displayed
        if (firstCommentRef.current) {
            firstCommentRef.current.scrollTo({
                top: 'auto',
                behavior: 'smooth'
            }); // Scroll to the top of the new comment
        }
    }, [data]);

    return (
        <div>
            <div className="flex flex-col">
                <span>Comments :</span>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-cente gap-5 max-h-96 overflow-y-auto mt-5 overflow-x-hidden">
                        {data[0]?.comments ? data.flatMap(item => item.comments.map((comment, idx) => (
                            <motion.div
                                initial={{ scale: .95, x: 50 }}
                                whileInView={{ scale: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                key={idx} ref={idx === 0 ? firstCommentRef : null} className="border rounded-md p-2 flex flex-col justify-center">
                                <h4 className="dark:text-gray-600">username: <span className="text-black dark:text-white">{comment.name ? comment.name : 'N/A'}</span></h4>
                                {comment.email && <h3 className="dark:text-gray-600">E-mail: <span className="text-black dark:text-white">{`${comment.email.substring(0, 3)}*****@${comment.email.split("@")[1]}`}</span></h3>}
                                <h4 className="dark:text-gray-600">Message: <span className="text-black dark:text-white">{comment.message ? comment.message : 'N/A'}</span></h4>
                                {comment.date && <span className="text-gray-600 self-end text-sm">{new Date(comment.date).toLocaleString()}</span>}
                            </motion.div>
                        ))) : <p className="self-start">No Comments On This Page</p>}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ShowComments;
