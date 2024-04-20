import { useState } from 'react';
import { Button } from '../ui/button';
import { createClient } from '@sanity/client';
import ShowComments from './ShowComments';
import { v4 as uuidv4 } from 'uuid'

const client = createClient({
    projectId: 'biuzzupd',
    dataset: 'production',
    useCdn: false, // set to `false` to get live data
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: 'skQGxwdkDbiRyBgF3VOnYhRxSCTiZSZY7bpHYMRXGyRhJBYFfp9XOj3OTTrHQIFbPTtHhdAsLtCeVuGr7T1PV3B6Cpcq7Is3suuvSIDFvJIygm8W2bR4Qf2PW5DbYqO6Jo5DVcOy6br6oTyvp2EOKem6kX9IPy1Ys6SV7mWxiu5bRMEKn7dT' // Only if you want to update content with the client
})

const CreateComment = ({ movie, slug }) => {
    const [comment, setComment] = useState({
        _type: 'comment',
        name: '',
        _key: '',
        email: '',
        message: ''
    });
    const [remark, setRemark] = useState(false)

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        // console.log(e)
        e.preventDefault();
        try {
            // Get movie ID by slug
            // const query = `*[_type == "movie" && slug.current == $slug][0]`;
            // const params = { slug: movieSlug };
            // const movie = await client.fetch(query, params);

            // Add new comment to the comments array

            const newComment = {
                _type: 'comment',
                name: comment.name,
                _key: uuidv4(),
                email: comment.email,
                message: comment.message,
                createdAt: new Date().toISOString() // Add createdAt field with current date
            };

            const updatedComments = [...movie.comments, newComment];

            // const updatedComments = [...movie.comments, {

            //     _type: 'comment',
            //     name: comment.name,
            //     _key: uuidv4(),
            //     email: comment.email,
            //     message: comment.message
            // }];
            // Update movie document with the new comments array
            await client.patch(movie._id).set({ comments: updatedComments }).commit();
            setComment({
                _type: '',
                name: '',
                _key: '',
                email: '',
                message: ''
            });
            setRemark(!remark)
        } catch (error) {
            console.log(error)
        }
    };

    console.log(comment)

    return (
        <>
            <form onSubmit={handleSubmit} className='border rounded-md flex flex-col gap-3 p-2'>
                <input type="text" name="name" value={comment.name} onChange={handleChange} placeholder="Your Name" className='bg-white dark:bg-black outline-none p-2 border-b' required />
                <input type="email" name="email" value={comment.email} onChange={handleChange} placeholder="Your Email" className='bg-white dark:bg-black outline-none p-2 border-b' />
                <textarea name="message" value={comment.message} onChange={handleChange} placeholder="Your Comment" className='bg-white dark:bg-black outline-none p-2 border-b' required></textarea>
                <Button type="submit">Submit</Button>
            </form>
            <div>
                <ShowComments slug={slug} update={remark}></ShowComments>
            </div>
        </>
    );
};

export default CreateComment;