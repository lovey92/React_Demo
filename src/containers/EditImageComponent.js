import React, { useState } from "react";
import './image.css';

const ImageComponent = ({current, imageList, handleSubmit}) => {
    const [ newImageList, setnewImageList ] = useState(-1);   
    const handleImageDescription = (e) => {
        const imgList = imageList.map(li => {        
            if(li.id === current.id) {
                li[e.target.name] = e.target.value;   
            }
            return li;
        })

        setnewImageList(imgList);
    }

    return (    
        <div  key={current.id} className="imageCard">
            <div className="img-title">
                <input  onChange={handleImageDescription} type="text" name="alt_description" value={current.alt_description} />
            </div>
            <img src={current.urls.full} alt={current.title} className="image-url" />
            <div className="card-button">
                <button  type="submit" onSubmit={handleSubmit} className="image-edit-button"> Update </button>
            </div>
        </div>          
    )
}    

export default ImageComponent;