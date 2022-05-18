import {
    MASTER_DATA_CUSTOMERS,
    MASTER_DATA_CUSTOMERS_LOADING,
    MASTER_DATA_SERVICES,
    MASTER_DATA_SERVICES_LOADING,
} from "./constants";
import {apiGet} from "../../../common/crud";

export function getCustomers() {
    return dispatch => {
        dispatch(getCustomersActionLoading())
        dispatch(apiGet('master-data/customers', {}, {}, getCustomersAction))
    };
}

export function getCustomersActionLoading() {
    return {
        type   : MASTER_DATA_CUSTOMERS_LOADING,
        payload: {}
    }
}

export function getCustomersAction(response) {
    return {
        type   : MASTER_DATA_CUSTOMERS,
        payload: response
    };
}

export function getServices() {
    return dispatch => {
        dispatch(getServicesActionLoading())
        dispatch(apiGet('master-data/services', {}, {}, getServicesAction))
    };
}

export function getServicesActionLoading() {
    return {
        type   : MASTER_DATA_SERVICES_LOADING,
        payload: {}
    }
}

export function getServicesAction(response) {
    return {
        type   : MASTER_DATA_SERVICES,
        payload: response
    };
}
