import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { NestedcategoryReducer } from './Reducers/reducers'
import { FlashSaleReducer } from './Reducers/reducers'
import { TopCategoryReducer } from './Reducers/reducers'
import { DashProductReducer } from './Reducers/reducers'
import { SingleProductReducer } from './Reducers/reducers'





const reducer = combineReducers({

    NestedcategoryReducer,
    FlashSaleReducer,
    TopCategoryReducer,
    DashProductReducer,
    SingleProductReducer,
})



const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store