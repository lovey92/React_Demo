/*
This file consists of test case for showing image list from axios api.
I have created sample test case. 
*/



import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { default as imageResponse } from '../mocks/imageResponse.json';

it("test get request for rendering image list", () => {
    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);
    const api_url = `${process.env.REACT_APP_FETCH_IMAGE_API_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}`;
    // Mock any GET request
    mock.onGet(api_url).reply(200, {
        data : imageResponse
    });
    axios.get(api_url).then(function (response) {
        expect(response.data.data).toEqual(imageResponse);
    });
})

