import { useState } from 'react';
import { Button } from '../ui/button';
import { createClient } from '@sanity/client';
import ShowComments from './ShowComments';
import { v4 as uuidv4 } from 'uuid'
import { toast } from "@/components/ui/use-toast";
import { LuMail } from "react-icons/lu";
import { BiMessage, BiUser } from "react-icons/bi";

const client = createClient({
    projectId: 'biuzzupd',
    dataset: 'production',
    useCdn: false, // set to `false` to get live data
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: 'skQGxwdkDbiRyBgF3VOnYhRxSCTiZSZY7bpHYMRXGyRhJBYFfp9XOj3OTTrHQIFbPTtHhdAsLtCeVuGr7T1PV3B6Cpcq7Is3suuvSIDFvJIygm8W2bR4Qf2PW5DbYqO6Jo5DVcOy6br6oTyvp2EOKem6kX9IPy1Ys6SV7mWxiu5bRMEKn7dT' // Only if you want to update content with the client
});

const CreateComment = ({ movie, slug }) => {
    const [comment, setComment] = useState({
        _type: 'comment',
        name: '',
        _key: '',
        email: '',
        message: ''
    });
    const [remark, setRemark] = useState(false);
    const [commentsExist, setCommentsExist] = useState('comments' in movie);

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (comment.name.toLowerCase() === 'admin' || comment.name.toLowerCase() === 'rapidflix') {
                toast({
                    title: "Cannot Use This Username",
                    description: "This username is reserved. Please your another.",
                });
            } else {
                const newComment = {
                    _type: 'comment',
                    name: comment.name,
                    _key: uuidv4(),
                    email: comment.email,
                    message: comment.message,
                    date: new Date()
                };

                // If 'comments' field does not exist, create it
                if (!commentsExist) {
                    await client
                        .patch(movie._id)
                        .set({ comments: [] }) // Initialize 'comments' field as an empty array
                        .commit();
                    setCommentsExist(true);
                }

                // Patch the movie document to append the new comment to the 'comments' array
                await client
                    .patch(movie._id)
                    .append('comments', [newComment])
                    .commit();

                setComment({
                    _type: '',
                    name: '',
                    _key: '',
                    email: '',
                    message: ''
                });
                setRemark(!remark);
                toast({
                    title: "Succeed",
                    description: "Comment has been submitted.",
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                title: "Failed !!!",
                description: "Unable to submit request. Please try later.",
            });
        }
    };

    return (
        <>
            <div className='flex flex-col gap-10 sm:w-10/12 md:w-1/2 mx-auto mt-5 pt-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className='fuppercase text-2xl'>If links are broken or any other issues. Please let us know in the comments.</h2>
                    <p className='uppercase text-sm dark:text-slate-400 text-slate-500'>We will try to fix it within 24Hr.</p>
                </div>
                <form onSubmit={handleSubmit} className='border rounded-md flex flex-col gap-1 p-1'>
                    <div className='flex items-center gap-2 p-2 border-b'>
                        <BiUser />
                        <input type="text" name="name" value={comment.name} onChange={handleChange} placeholder="Your Name *" className='bg-white dark:bg-black outline-none w-full' required />
                    </div>
                    <div className='flex items-center gap-2 p-2 border-b'>
                        <LuMail />
                        <input type="email" name="email" value={comment.email} onChange={handleChange} placeholder="Your Email" className='bg-white dark:bg-black outline-none w-full' />
                    </div>
                    <div className='flex items-start gap-2 p-2'>
                        <BiMessage className='mt-1' />
                        <textarea name="message" rows={4} value={comment.message} onChange={handleChange} placeholder="Your Comment *" className='bg-white dark:bg-black outline-none w-full' required></textarea>
                    </div>
                    <Button type="submit" className='w-full md:w-fit self-end'>Submit</Button>
                </form>
                <div>
                    <ShowComments slug={slug} update={remark}></ShowComments>
                </div>
            </div>
        </>
    );
};

export default CreateComment;
