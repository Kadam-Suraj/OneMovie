import { Button } from "./ui/button"

const Genrestags = ({ genres }) => {
    console.log(genres)
    return (
        <div className="flex flex-wrap gap-2">
            {
                genres.map((item: any, idx: any) => {
                    return <Button key={idx} variant="outline" className="pointer-events-none rounded-full uppercase">{item}</Button>
                })
            }
        </div>
    )
}

export default Genrestags