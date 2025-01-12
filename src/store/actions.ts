import { InitialDataProp } from './../mockData/initialData'
interface IncrementActionProp {
  type: string
  payload: { id: InitialDataProp['id'] }
}

interface DecrementActionProp {
  type: string
  payload: { id: InitialDataProp['id'] }
}
interface AddOrderAction {
  type: string
  payload: InitialDataProp[]
}
interface IsShowModalProp {
  type: string
  payload: boolean
}

export function incrementAction(id: string): IncrementActionProp {
  return {
    type: 'INC',
    payload: { id },
  }
}

export function decrementAction(id: string): DecrementActionProp {
  return {
    type: 'DEC',
    payload: { id },
  }
}
export function favoriteProductAction(id: string): DecrementActionProp {
  return {
    type: 'FAV',
    payload: { id },
  }
}

export function AddOrderAction(): AddOrderAction {
  return {
    type: 'ADD',
    payload: [
      {
        img: '',
        title: '',
        id: '',
        price: 0,
        count: 0,
        favorite: false,
      },
    ],
  }
}
export function isShowModal(): IsShowModalProp {
  console.log('show')

  return {
    type: 'SHOW',
    payload: true,
  }
}

export type ProjectAction =
  | IncrementActionProp
  | DecrementActionProp
  | AddOrderAction
  | IsShowModalProp
