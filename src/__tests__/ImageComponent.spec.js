/*
This file consists of test case for delete image from image list component.
I have created sample test case. 
*/


import { default as deleteImageJson } from '../mocks/deleteImage.json';
import { default as imageJson } from '../mocks/imageResponse.json';
import { imageReducer } from '../redux/reducers/imageReducer';
describe('test delete image', () => {
    const initialState = {
        images : []
    }
    
    const mockData = imageJson;
    const deleteId = 'I8W-xQaokQg';
    const newImageList = mockData.filter((imgList)  => imgList.id !== deleteId);
    it('should delete item from image list', () => {
        const action = {
            type: 'DELETE_IMAGE',
            payload: newImageList
        };
        expect(imageReducer(initialState, action).images[0].id).toBe(deleteImageJson[0].id);

    })
})   