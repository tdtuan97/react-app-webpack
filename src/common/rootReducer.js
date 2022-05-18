import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import historyCommon from "./historyCommon";
import {reducer as CrudReducer} from "./crud/reducer"
import {reducer as AuthReducer} from "../features/Auth/redux/reducer"
import {reducer as HomeReducer} from "../features/Home/redux/reducer"
import {reducer as ProductReducer} from "../features/Product/redux/reducer"
import {reducer as CustomerReducer} from "../features/Customer/redux/reducer"
import {reducer as CustomerServiceReducer} from "../features/CustomerService/redux/reducer"
import {reducer as ServiceReducer} from "../features/Service/redux/reducer"
import {reducer as MasterDataReducer} from "../features/MasterData/redux/reducer"

const reducerMap = {
    router         : connectRouter(historyCommon),
    crud           : CrudReducer,
    auth           : AuthReducer,
    home           : HomeReducer,
    product        : ProductReducer,
    customer       : CustomerReducer,
    customerService: CustomerServiceReducer,
    service        : ServiceReducer,
    masterData     : MasterDataReducer,
};

export default combineReducers(reducerMap);
