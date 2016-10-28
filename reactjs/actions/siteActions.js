import { request } from "../utils"

export const SITES = "SITES"
export const SITES_SUCCESS = "SITES_SUCCESS"
export const SITES_ERROR400 = "SITES_ERROR400"
export const SITES_ERROR500 = "SITES_ERROR500"
export const SITES_FAILURE = "SITES_FAILURE"

export function fetchSites() {
  return function (dispatch) {
    let url = "http://slaponic.us/sites/"
    dispatch({type: SITES})
    return request(
      url, {},
      (json) => { dispatch({type: SITES_SUCCESS, res: json}) },
      (json) => { dispatch({type: SITES_ERROR400, res: json}) },
      (res) => { dispatch({type: SITES_ERROR500, res: res}) },
      (ex) => { dispatch({type: SITES_FAILURE, error: ex}) },
    )
  }
}