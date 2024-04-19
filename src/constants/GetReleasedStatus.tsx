import { getYear } from "./getYear";

const GetReleasedStatus = ({ date }) => {

    const movieDate = new Date(date).getTime()
    const Day = new Date(date).toDateString()
    const currentDate = new Date().toDateString()
    const filteredCurrentDate = new Date(currentDate).getTime()
    console.log(currentDate)

    console.log()
    return <div>
        {filteredCurrentDate >= movieDate ? <span>Released in {getYear(date)}</span> : <span>Will release on {`${Day}`}</span>}
    </div>
}

export default GetReleasedStatus