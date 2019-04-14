import {createStore,applyMiddleware} from 'redux'
import promoiseMiddleware from 'redux-promise-middleware'
import {createLogger} from 'redux-logger'

import reducers from './reducers'

const store = createStore(
    reducers,
    applyMiddleware(
        promoiseMiddleware(),
        createLogger()
    )
)

export default store