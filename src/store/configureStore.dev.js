import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,reduxImmutableStateInvariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

//開発用:ディスパッチ内またはディスパッチ間で状態を変更しようとすると、
// エラーが発生するReduxミドルウェア。開発用にのみ！
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

    // applyMiddleware(thunk, reduxImmutableStateInvariant())
