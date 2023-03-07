import { ActionTypes } from "../constants/action-types"

export const setImages = (images) => {
    return {
        type    : ActionTypes.SET_IMAGES,
        payload : images
    }
}

export const searchImages = (images) => {
    return {
        type    : ActionTypes.SEARCH_IMAGES,
        payload : images
    }
}

export const deleteImage = (image) => {
    return {
        type    : ActionTypes.DELETE_IMAGE,
        payload : image
    }
}

export const updateImage = (image) => {
    return {
        type    : ActionTypes.UPDATE_IMAGE,
        payload : image
    }
}