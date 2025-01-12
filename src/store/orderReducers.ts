import { InitialDataProp } from '../mockData/initialData'
import { ProjectAction } from './actions'

const initialOrder: InitialDataProp[] = []

export function OrderReducers(state = initialOrder, action: ProjectAction) {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.payload)
    case 'INC':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: (item.count += 1),
          }
        }
        return item
      })
    case 'DEC':
      return state.map((item) => {
        if (item.id === action.payload.id && item.count > 0) {
          return {
            ...item,
            count: (item.count -= 1),
          }
        }
        return item
      })
    default:
      return state
  }
}
