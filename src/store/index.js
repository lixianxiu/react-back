import rootReducers from "../reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(rootReducers, enhancer);
  return store;
}
