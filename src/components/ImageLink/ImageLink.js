import './ImageLink.css';

const ImageLink = ({prop1, prop2}) => {
    return(
        <div className="placement_link">
            <p className='f3 tc'>
                {'This face recognition app can detect faces on any image.'}
                <br/>
                <br/>
                {'Input an image url below to see it in action...'}
            </p>
            <div>
                <div className='design pa4 br3 shadow-5'>
                    <input type="text" 
                        className='f4 pa2 w-70' 
                        onChange={prop1}
                    />
                    <button 
                        className='w-30 grow f4 link ph3 pv2 white bg-light-purple'
                        onClick={prop2}>
                        {'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLink;