import { getRouteMap } from "react-tree-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, AnyAction, compose, applyMiddleware } from "redux";
import { connectRoutes } from "redux-first-router";
import { home } from "src/routes";
import * as hh from "history";
import { State } from "./state";
import { initialState, reducer } from "./reducer";
import thunk from "redux-thunk";

const routerMap = getRouteMap(home);


/**Creates the redux store*/
export function configureStore() {
    const routing = connectRoutes<any, any>(routerMap, {
        createHistory: hh.createHashHistory
    } );
    
    const rootReducer = (state: State | undefined, action: AnyAction): State => {
        const y = reducer(state, action as any);
        return {
            ...y,
            location: routing.reducer(y.location as any, action as any)
        }
    };


    const store = createStore<State, AnyAction, unknown, State>(
        rootReducer,
        initialState,
        composeWithDevTools(
            routing.enhancer,
            applyMiddleware(
                routing.middleware,
                thunk
            ),
        )
    );

    return store;
}