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
import {apiDelete, apiGet, apiPost, CODE_SUCCESS, fetchPaginate} from "../../../common/crud/actions";
import {pushMessageSuccess} from "../../../layouts";

export function fetchTableCustomerService(params) {
    return dispatch => {
        dispatch(fetchActionLoading())
        dispatch(fetchPaginate('admin/customer-service/', params, fetchAction))
    };
}

export function fetchActionLoading() {
    return {
        type   : CUSTOMER_SERVICE_FETCH_LOADING,
        payload: {}
    }
}

export function fetchAction(response) {
    return {
        type   : CUSTOMER_SERVICE_FETCH,
        payload: response
    };
}

export function createCustomerService(params) {
    return dispatch => {
        dispatch(createActionLoading())
        dispatch(apiPost('admin/customer-service/', params, {}, createAction))
    };
}

export function createActionLoading() {
    return {
        type   : CUSTOMER_SERVICE_CREATE_LOADING,
        payload: null
    }
}

export function createAction(response) {
    return {
        type   : CUSTOMER_SERVICE_CREATE,
        payload: response
    };
}

export function detailCustomerService(id) {
    return dispatch => {
        dispatch(detailActionLoading())
        dispatch(apiGet('admin/customer-service/' + id, {}, {}, detailAction))
    };
}

export function detailAction(response) {
    return {
        type   : CUSTOMER_SERVICE_DETAIL,
        payload: response
    };
}

export function detailActionLoading() {
    return {
        type   : CUSTOMER_SERVICE_DETAIL_LOADING,
        payload: null
    };
}

export function updateCustomerService(id, params) {
    return dispatch => {
        dispatch(updateActionLoading())
        dispatch(apiPost('admin/customer-service/' + id, params, {}, updateAction))
    };
}

export function updateAction(response) {
    if (response.code === CODE_SUCCESS) {
        pushMessageSuccess();
    }
    return {
        type   : CUSTOMER_SERVICE_UPDATE,
        payload: response
    };
}

export function updateActionLoading() {
    return {
        type   : CUSTOMER_SERVICE_UPDATE_LOADING,
        payload: null
    };
}

export function deleteAction(response) {
    return {
        type   : CUSTOMER_SERVICE_DELETE,
        payload: response
    };
}

export function deleteActionLoading() {
    return {
        type   : CUSTOMER_SERVICE_DELETE_LOADING,
        payload: null
    };
}

export function visibleConfirmDelete(flag) {
    return {
        type   : CUSTOMER_SERVICE_DELETE_VISIBLE_CONFIRM,
        payload: flag
    };
}

export function deleteCustomerService(id) {
    return dispatch => {
        dispatch(deleteActionLoading())
        dispatch(apiDelete('admin/customer-service/' + id, {}, deleteAction))
    };
}
