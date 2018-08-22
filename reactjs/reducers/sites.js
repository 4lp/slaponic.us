import * as siteActions from "../actions/siteActions"

const initialState = {
	isLoadingSites: false,
	sites: undefined,
}

export default function sites(state=initialState, action={}) {
  switch (action.type) {
  case siteActions.SITES:
    return {...state, isLoadingSites: true}
  case siteActions.SITES_SUCCESS:
    return {...state, isLoadingSites: false, content: action.res}
  case siteActions.SITES_ERROR400:
  case siteActions.SITES_ERROR500:
  case siteActions.SITES_FAILURE:
    return {...state, isLoadingSites: false}
  default:
    return state
  }
}