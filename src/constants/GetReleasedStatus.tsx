import { getYear } from "./getYear";

const GetReleasedStatus = ({ date }) => {
    const currentTimeStamp = new Date(new Date().toISOString()).getTime()
    const movieDate = new Date(date).getTime()
    const Day = new Date(date).getDate()

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = months[new Date(date).getMonth()];

    return <div>
        {currentTimeStamp >= movieDate ? <span>Released in {getYear(date)}</span> : <span>Will release on {`${Day}-${day}`}</span>}
    </div>
}

export default GetReleasedStatus