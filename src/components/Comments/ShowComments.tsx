import { getComments } from "@/api/client"
import { useEffect, useState } from "react"

const ShowComments = ({ slug, update }) => {
    const [data, setData] = useState([])

    const fetch = async () => {
        const data = await getComments(slug)
        setData(data)
    }

    useEffect(() => {
        fetch()
    }, [slug, update])

    return (
        <div>
            <div className="flex flex-col">
                <span>Comments :</span>
                <div className="flex flex-col gap-5 max-h-96 overflow-y-scroll mt-5">
                    {data[0]?.comments ? data.map(item => item.comments.map((item, idx) => (
                        <div key={idx} className="border rounded-md p-2 flex flex-col justify-center">
                            <h4 className="dark: text-gray-600">username: <span className="text-black dark:text-white">{item.name ? item.name : 'N/A'}</span></h4>
                            {item.email ? <h3 className="dark: text-gray-600">E-mail: <span className="text-black dark:text-white">{item.email}</span></h3> : null}
                            <h4 className="dark: text-gray-600">Message: <span className="text-black dark:text-white">{item.message ? item.message : 'N/A'}</span></h4>
                            {item.createdAt ? <span className="text-gray-600 self-end text-sm">{new Date(item.createdAt).toLocaleString()}</span> : null}
                        </div>
                    )))
                        : <p>No Comments On This Page</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowComments