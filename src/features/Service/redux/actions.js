import {
    SERVICE_FETCH,
    SERVICE_FETCH_LOADING,
    SERVICE_CREATE,
    SERVICE_CREATE_LOADING,
    SERVICE_DETAIL,
    SERVICE_DETAIL_LOADING,
    SERVICE_UPDATE,
    SERVICE_UPDATE_LOADING,
    SERVICE_DELETE,
    SERVICE_DELETE_LOADING,
    SERVICE_DELETE_VISIBLE_CONFIRM,
} from "./constants";
import {apiDelete, apiGet, apiPost, CODE_SUCCESS, fetchPaginate} from "../../../common/crud/actions";
import {pushMessageSuccess} from "../../../layouts";

export function fetchTableService(params) {
    return dispatch => {
        dispatch(fetchActionLoading())
        dispatch(fetchPaginate('admin/services/', params, fetchAction))
    };
}

export function fetchActionLoading() {
    return {
        type   : SERVICE_FETCH_LOADING,
        payload: {}
    }
}

export function fetchAction(response) {
    return {
        type   : SERVICE_FETCH,
        payload: response
    };
}

export function createService(params) {
    return dispatch => {
        dispatch(createActionLoading())
        dispatch(apiPost('admin/services/', params, {}, createAction))
    };
}

export function createActionLoading() {
    return {
        type   : SERVICE_CREATE_LOADING,
        payload: null
    }
}

export function createAction(response) {
    return {
        type   : SERVICE_CREATE,
        payload: response
    };
}

export function detailService(id) {
    return dispatch => {
        dispatch(detailActionLoading())
        dispatch(apiGet('admin/services/' + id, {}, {}, detailAction))
    };
}

export function detailAction(response) {
    return {
        type   : SERVICE_DETAIL,
        payload: response
    };
}

export function detailActionLoading() {
    return {
        type   : SERVICE_DETAIL_LOADING,
        payload: null
    };
}

export function updateService(id, params) {
    return dispatch => {
        dispatch(updateActionLoading())
        dispatch(apiPost('admin/services/' + id, params, {}, updateAction))
    };
}

export function updateAction(response) {
    if (response.code === CODE_SUCCESS) {
        pushMessageSuccess();
    }
    return {
        type   : SERVICE_UPDATE,
        payload: response
    };
}

export function updateActionLoading() {
    return {
        type   : SERVICE_UPDATE_LOADING,
        payload: null
    };
}

export function deleteAction(response) {
    return {
        type   : SERVICE_DELETE,
        payload: response
    };
}

export function deleteActionLoading() {
    return {
        type   : SERVICE_DELETE_LOADING,
        payload: null
    };
}

export function visibleConfirmDelete(flag) {
    return {
        type   : SERVICE_DELETE_VISIBLE_CONFIRM,
        payload: flag
    };
}

export function deleteService(id) {
    return dispatch => {
        dispatch(deleteActionLoading())
        dispatch(apiDelete('admin/services/' + id, {}, deleteAction))
    };
}
