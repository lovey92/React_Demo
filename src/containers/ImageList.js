import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ImageComponent from "./ImageComponent.js";
import { setImages } from "../redux/actions/imageActions";


const ImageList = () => {
    const dispatch = useDispatch(); 
    const fetchImages = async () => {
        const response = await axios
            .get(`${process.env.REACT_APP_FETCH_IMAGE_API_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}`)
            .catch((err) => {
                console.log("Error: ", err);
            });
            dispatch(setImages(response.data));
    }  
    
    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <ImageComponent />
    )
}
export default ImageList;