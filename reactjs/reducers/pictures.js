import * as pictureActions from "../actions/pictureActions"

const initialState = {
	isLoadingPictures: false,
	pictures: undefined,
}

export default function pictures(state=initialState, action={}) {
  switch (action.type) {
  case pictureActions.PICTURES:
    return {...state, isLoadingPictures: true}
  case pictureActions.PICTURES_SUCCESS:
    return {...state, isLoadingPictures: false, content: action.res}
  case pictureActions.PICTURES_ERROR400:
  case pictureActions.PICTURES_ERROR500:
  case pictureActions.PICTURES_FAILURE:
    return {...state, isLoadingPictures: false}
  default:
    return state
  }
}