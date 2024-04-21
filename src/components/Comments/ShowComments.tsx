import { getComments } from "@/api/client";
import { useEffect, useRef, useState } from "react";
import Processing from "../Processing";
import { AnimatePresence, motion } from "framer-motion";

const ShowComments = ({ slug, update }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const commentsListRef = useRef(null);

    const fetchComments = async () => {
        setLoading(true);
        const newData = await getComments(slug);
        setData(newData);
        setLoading(false);
    };

    useEffect(() => {
        fetchComments();
    }, [slug, update]);

    useEffect(() => {
        if (commentsListRef.current) {
            // Scroll to the bottom of the comment list when new comments are loaded
            commentsListRef.current.scrollTop = commentsListRef.current.scrollHeight;
        }
    }, [data]);
    console.log(data)

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
                        ref={commentsListRef} className="flex flex-col justify-cente gap-5 max-h-96 overflow-y-auto mt-5">
                        {loading ? (
                            <Processing key={null} />
                        ) : (
                            data[0]?.comments ? data?.flatMap(item => item.comments.map((comment, idx) => (
                                <div key={idx} className="border rounded-md p-2 flex flex-col justify-center">
                                    <h4 className="dark:text-gray-600">username: <span className="text-black dark:text-white">{comment.name ? comment.name : 'N/A'}</span></h4>
                                    {comment.email && <h3 className="dark:text-gray-600">E-mail: <span className="text-black dark:text-white">{comment.email}</span></h3>}
                                    <h4 className="dark:text-gray-600">Message: <span className="text-black dark:text-white">{comment.message ? comment.message : 'N/A'}</span></h4>
                                    {comment.createdAt && <span className="text-gray-600 self-end text-sm">{new Date(comment.createdAt).toLocaleString()}</span>}
                                </div>
                            )))
                                : <p className="self-start">No Comments On This Page</p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ShowComments;
