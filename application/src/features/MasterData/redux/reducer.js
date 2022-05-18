import initialState from "./initialState";
import {
    MASTER_DATA_CUSTOMERS,
    MASTER_DATA_CUSTOMERS_LOADING,
    MASTER_DATA_SERVICES,
    MASTER_DATA_SERVICES_LOADING,
} from "./constants";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    let data    = [];
    switch (action.type) {
        case MASTER_DATA_CUSTOMERS:
            data = payload.data !== undefined ? payload.data : [];
            return {
                ...state,
                customers: {
                    ...state.customers,
                    data   : data,
                    loading: false,
                },
            };
        case MASTER_DATA_CUSTOMERS_LOADING:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    loading: true,
                },
            }
        case MASTER_DATA_SERVICES:
            data = payload.data !== undefined ? payload.data : [];
            return {
                ...state,
                services: {
                    ...state.customers,
                    data   : data,
                    loading: false,
                },
            };
        case MASTER_DATA_SERVICES_LOADING:
            return {
                ...state,
                services: {
                    ...state.customers,
                    loading: true,
                },
            };
        default:
            return state
    }
}