import initialState from "./initialState";
import {
    CUSTOMER_SERVICE_FETCH,
    CUSTOMER_SERVICE_FETCH_LOADING,
    CUSTOMER_SERVICE_CREATE,
    CUSTOMER_SERVICE_CREATE_LOADING,
    CUSTOMER_SERVICE_DETAIL,
    CUSTOMER_SERVICE_DETAIL_LOADING,
    CUSTOMER_SERVICE_UPDATE,
    CUSTOMER_SERVICE_UPDATE_LOADING,
    CUSTOMER_SERVICE_DELETE,
    CUSTOMER_SERVICE_DELETE_LOADING,
    CUSTOMER_SERVICE_DELETE_VISIBLE_CONFIRM,
} from "./constants";
import {LOCATION_CHANGE} from "connected-react-router";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case CUSTOMER_SERVICE_FETCH:
            let data = payload.data !== undefined ? payload.data : [];
            return {
                ...state,
                list: {
                    data      : data.data,
                    pagination: {
                        current : payload.current_page,
                        pageSize: payload.per_page,
                        total   : payload.total,
                    },
                    loading   : false,
                },
                create: {
                    ...state.create,
                    errors : {},
                    data   : {},
                    loading: false,
                }
            };
        case CUSTOMER_SERVICE_FETCH_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true,
                }
            }
        case CUSTOMER_SERVICE_CREATE:
            return {
                ...state,
                create: {
                    ...state.create,
                    errors : payload.errors,
                    data   : payload.data,
                    loading: false,
                }
            };
        case CUSTOMER_SERVICE_CREATE_LOADING:
            return {
                ...state,
                create: {
                    ...state.create,
                    errors : {},
                    data   : {},
                    loading: true,
                }
            }
        case CUSTOMER_SERVICE_DETAIL:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: false,
                    errors : payload.errors,
                    data   : payload.data,
                    id     : payload.data.id,
                    isFound: payload.data.id !== undefined && payload.data.id !== null,
                },
                create: {
                    ...state.create,
                    errors : {},
                    data   : {},
                    loading: false,
                }
            };
        case CUSTOMER_SERVICE_DETAIL_LOADING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: true,
                    errors : {},
                    data   : {},
                    id     : null,
                    isFound: true,
                }
            }
        case CUSTOMER_SERVICE_UPDATE:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: false,
                    errors : payload.errors,
                    data   : payload.data,
                    update : {
                        ...state.detail.update,
                        modalVisible: false,
                        loading     : false,
                    }
                }
            };
        case CUSTOMER_SERVICE_UPDATE_LOADING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    update: {
                        ...state.detail.update,
                        modalVisible: false,
                        loading     : true,
                    }
                }
            }
        case CUSTOMER_SERVICE_DELETE:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    errors      : payload.errors,
                    modalVisible: false,
                    loading     : false,
                    isDeleted   : payload.errors.length === 0,
                }
            };
        case CUSTOMER_SERVICE_DELETE_LOADING:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    errors      : [],
                    modalVisible: false,
                    loading     : true,
                    isDeleted   : false,
                }
            }

        case CUSTOMER_SERVICE_DELETE_VISIBLE_CONFIRM:{
            return {
                ...state,
                delete: {
                    ...state.delete,
                    errors      : [],
                    modalVisible: payload,
                    loading     : false,
                    isDeleted   : false,
                }
            }
        }
        case LOCATION_CHANGE:
            return {
                ...state,
                delete: {
                    ...initialState.delete,
                }
            }
        default:
            return state
    }
}