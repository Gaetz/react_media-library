import initialState from './initialState'
import * as types from '../constants/ActionTypes'

export default function (state = initialState.images, action) {
    switch (action.types) {
        case types.FLICKR_IMAGES_SUCCESS:
            return [...state, action.images];
        case types.SELECTED_IMAGE:
            return { ...state, selectedImage: action.image };
        default:
            return state;
    }
}