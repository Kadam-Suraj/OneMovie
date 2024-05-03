import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Genrestags = ({ genres }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {
                genres.map((item: any, idx: any) => {
                    return <Button key={idx} variant="outline" className="rounded-full uppercase">
                        <Link to={`/category/${item.name || item}`}>
                            {item.name || item}
                        </Link>
                    </Button>
                })
            }
        </div>
    )
}

export default Genrestags