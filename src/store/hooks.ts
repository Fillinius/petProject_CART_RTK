import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { Dispatch } from 'redux'
import { ProjectAction } from './actions'

export const useAppDispatch = useDispatch<Dispatch<ProjectAction>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
