import { request } from "../utils"

export const PICTURES = "PICTURES"
export const PICTURES_SUCCESS = "PICTURES_SUCCESS"
export const PICTURES_ERROR400 = "PICTURES_ERROR400"
export const PICTURES_ERROR500 = "PICTURES_ERROR500"
export const PICTURES_FAILURE = "PICTURES_FAILURE"

export function fetchPictures() {
  return function (dispatch) {
    //let url = "http://slaponic.us/pictures/"
    let url = "http://localhost:8000/pictures/"
    dispatch({type: PICTURES})
    return request(
      url, {},
      (json) => { dispatch({type: PICTURES_SUCCESS, res: json}) },
      (json) => { dispatch({type: PICTURES_ERROR400, res: json}) },
      (res) => { dispatch({type: PICTURES_ERROR500, res: res}) },
      (ex) => { dispatch({type: PICTURES_FAILURE, error: ex}) },
    )
  }
}
