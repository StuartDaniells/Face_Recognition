import './FaceId.css';

const Face_Id = ({image, box}) => {
    return(
        <div className='placement_image'>
            <img id='inputImg' alt="your_image_shows_here" src={image} width='500px' height='auto' />

            {box.map((boxes,i) => {
                const {topRow, rightCol, bottomRow, leftCol} = boxes;
                return (
                    <div 
                        key={i}
                        className='bounding-box'
                        style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}>
                    </div>
                )
            })}
        </div>
    )
}

export default Face_Id;