import { createStore, compose, bindActionCreators, applyMiddleware } from '../libs/redux'
import ReduxThunk from '../libs/redux-thunk'
import { createLogger } from '../libs/redux-logger'
import { connect, Provider } from '../libs/wechat-weapp-redux'
import rootReducers from './reducer/index'
const reduxLogger = createLogger({collapsed: true, diff: true})

const configureStore = function() {
    const store = createStore(
        rootReducers,
        compose(applyMiddleware(ReduxThunk, reduxLogger))
    );
    return store
}

export { connect, Provider, bindActionCreators, configureStore }