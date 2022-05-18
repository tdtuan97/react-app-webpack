import {
    CUSTOMER_FETCH,
    CUSTOMER_FETCH_LOADING,
    CUSTOMER_CREATE,
    CUSTOMER_CREATE_LOADING,
    CUSTOMER_DETAIL,
    CUSTOMER_DETAIL_LOADING,
    CUSTOMER_UPDATE,
    CUSTOMER_UPDATE_LOADING,
    CUSTOMER_DELETE,
    CUSTOMER_DELETE_LOADING,
    CUSTOMER_DELETE_VISIBLE_CONFIRM,
} from "./constants";
import {apiDelete, apiGet, apiPost, CODE_SUCCESS, fetchPaginate} from "../../../common/crud/actions";
import {pushMessageError, pushMessageSuccess} from "../../../layouts";

export function fetchTableCustomer(params) {
    return dispatch => {
        dispatch(fetchActionLoading())
        dispatch(fetchPaginate('admin/customers/', params, fetchAction))
    };
}

export function fetchActionLoading() {
    return {
        type   : CUSTOMER_FETCH_LOADING,
        payload: {}
    }
}

export function fetchAction(response) {
    return {
        type   : CUSTOMER_FETCH,
        payload: response
    };
}

export function createCustomer(params) {
    return dispatch => {
        dispatch(createActionLoading())
        dispatch(apiPost('admin/customers/', params, {}, createAction))
    };
}

export function createActionLoading() {
    return {
        type   : CUSTOMER_CREATE_LOADING,
        payload: null
    }
}

export function createAction(response) {
    return {
        type   : CUSTOMER_CREATE,
        payload: response
    };
}

export function detailCustomer(id) {
    return dispatch => {
        dispatch(detailActionLoading())
        dispatch(apiGet('admin/customers/' + id, {}, {}, detailAction))
    };
}

export function detailAction(response) {
    return {
        type   : CUSTOMER_DETAIL,
        payload: response
    };
}

export function detailActionLoading() {
    return {
        type   : CUSTOMER_DETAIL_LOADING,
        payload: null
    };
}

export function updateCustomer(id, params) {
    return dispatch => {
        dispatch(updateActionLoading())
        dispatch(apiPost('admin/customers/' + id, params, {}, updateAction))
    };
}

export function updateAction(response) {
    if (response.code === CODE_SUCCESS) {
        pushMessageSuccess();
    }
    return {
        type   : CUSTOMER_UPDATE,
        payload: response
    };
}

export function updateActionLoading() {
    return {
        type   : CUSTOMER_UPDATE_LOADING,
        payload: null
    };
}

export function deleteAction(response) {
    return {
        type   : CUSTOMER_DELETE,
        payload: response
    };
}

export function deleteActionLoading() {
    return {
        type   : CUSTOMER_DELETE_LOADING,
        payload: null
    };
}

export function visibleConfirmDelete(flag) {
    return {
        type   : CUSTOMER_DELETE_VISIBLE_CONFIRM,
        payload: flag
    };
}

export function deleteCustomer(id) {
    return dispatch => {
        dispatch(deleteActionLoading())
        dispatch(apiDelete('admin/customers/' + id, {}, deleteAction))
    };
}
