import * as resumeActions from "../actions/resumeActions"

const initialState = {
	resume: undefined,
}

export default function resume(state=initialState, action={}) {
  switch (action.type) {
  case resumeActions.RESUME:
    return {...state, isLoadingResume: true}
  case resumeActions.RESUME_SUCCESS:
    return {...state, isLoadingResume: false, content: action.res}
  case resumeActions.RESUME_ERROR400:
  case resumeActions.RESUME_ERROR500:
  case resumeActions.RESUME_FAILURE:
    return {...state, isLoadingResume: false}
  default:
    return state
  }
}