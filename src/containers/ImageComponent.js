import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { searchImages, deleteImage } from "../redux/actions/imageActions";
import EditImageComponent from './EditImageComponent';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './image.css';

const ImageComponent = () => {
const images = useSelector((state) => state.allImages.images);
const dispatch = useDispatch(); 
const [ searchValue, setSearchValue ] = useState("");   
const [ updateState,  setUpdateState ] = useState(-1);

const handleInputChange = (e) => {
    setSearchValue(e.target.value);
}

const handleButtonSearch = () => {
  axios.get(`${process.env.REACT_APP_SEARCH_API_URL}${searchValue}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}`)
    .then(response => {
        dispatch(searchImages(response.data.results));
    })          
    .catch((err) => {
        console.log("Error: ", err);
    });    
    setSearchValue("");
}

const editImageContent = (imageId) => {
    setUpdateState(imageId);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateState(-1);
}

const dltImage = (imageId) => {
      const newImageList = images.filter((imgList)  => imgList.id !== imageId);
       dispatch(deleteImage(newImageList));
}

const renderList = images.map((image) => {
    const id        = image.id;
    const image_url = image.urls.full;
    const title     = image.alt_description;
    
    return (
            updateState === id ? <EditImageComponent current={image} imageList={images}  onSubmit={handleSubmit} /> :
                <div key={id} className="imageCard">
                    <div className="img-title"> {title} </div>
                    <LazyLoadImage src={image_url} alt={title} className="image-url" loading="lazy" />
                    <div className="card-button">
                        <button onClick={() => editImageContent(id)} className="image-edit-button"> Edit </button>
                        <button onClick={() => dltImage(id)} className="image-delete-button"> Delete </button>
                    </div>
                </div>              
        );
        });
       
    return <><input 
                placeholder="Search" 
                type="search" 
                className="search" 
                value={searchValue}
                onChange={handleInputChange}/>
    <button  
        disabled={!searchValue}
        className="search-button"
        onClick={handleButtonSearch}>Search</button>    
    <div className="flex">
        <form className="flex" onSubmit={handleSubmit}>
            {renderList}
            </form></div> 
    </>
}
export default ImageComponent;