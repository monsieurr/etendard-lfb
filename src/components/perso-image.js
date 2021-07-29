import * as React from "react"
import MyImage from '../assets/images/icon.png'

const myImageWrapperStyle = {
    display: 'grid',
}

const myImageStyle = {
    width: '96px',
    height: '96px',
    alignSelf: 'center',
}

const alertClick = () => {
    console.log("test de clic")
}


const PersoImage = () => {
    return (
        <div className="persoImage" style={myImageWrapperStyle}>
            <img src={MyImage} alt="my Image" style={myImageStyle} onClick={alertClick} />
        </div>
    )
}

export default PersoImage;