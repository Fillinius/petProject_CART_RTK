import { ProjectAction } from './actions'

interface InitialeModalProp {
  isShow: boolean
}

const InitialModal: InitialeModalProp = {
  isShow: false,
}
export function modulReducer(state = InitialModal, action: ProjectAction) {
  switch (action.type) {
    case 'SHOW':
      return { isShow: true }

    default:
      return state
  }
}
