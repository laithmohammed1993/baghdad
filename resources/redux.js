import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
let initialState = {
    'loading'               : false,
    'langauge'              : 'en',
    'mode'                  : 'light',
    'drawer-list'           : [],
    'drawer-visible'        : false,
    'article'               : {},
}
function reducer(state = initialState, action){
  switch (action?.type) {
    case 'SETSTATE':
      return { ...state , ...action?.data }
    default:
      return state
  }
}
let store;

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({ ...store.getState(), ...preloadedState })
    store = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
