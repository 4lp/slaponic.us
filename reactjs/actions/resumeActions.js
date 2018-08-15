import { request } from "../utils"

export const RESUME = "RESUME"
export const RESUME_SUCCESS = "RESUME_SUCCESS"
export const RESUME_ERROR400 = "RESUME_ERROR400"
export const RESUME_ERROR500 = "RESUME_ERROR500"
export const RESUME_FAILURE = "RESUME_FAILURE"

export function fetchResume() {
  return function (dispatch) {
    //let url = "http://slaponic.us/resume/"
    let url = "http://localhost:8000/resume/"
    dispatch({type: RESUME})
    return request(
      url, {},
      (json) => { dispatch({type: RESUME_SUCCESS, res: json}) },
      (json) => { dispatch({type: RESUME_ERROR400, res: json}) },
      (res) => { dispatch({type: RESUME_ERROR500, res: res}) },
      (ex) => { dispatch({type: RESUME_FAILURE, error: ex}) },
    )
  }
}
