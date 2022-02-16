import { createStore } from "redux";
import {addProdReducer} from "../reducers";

export default createStore(addProdReducer)