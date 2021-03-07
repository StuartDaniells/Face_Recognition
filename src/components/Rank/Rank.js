import './Rank.css'

const rank = () => {
    return(
        <div className='placement_rank tc'>
            <div className = "white f3">
                {'Your current search rank is...'} 
            </div>
            <div className="white f1">
                {'#' + Math.floor(Math.random()*10)}
            </div>
        </div>
    )
}

export default rank;