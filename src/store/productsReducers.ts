import { initialData } from '../mockData/initialData'
import { ProjectAction } from './actions'

export function ProductReducers(state = initialData, action: ProjectAction) {
  switch (action.type) {
    case 'FAV':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            favorite: !item.favorite,
          }
        }
        return item
      })
    case 'BUY':
      return state.find((item) => item.id === action.payload.id)

    default:
      return state
  }
}
