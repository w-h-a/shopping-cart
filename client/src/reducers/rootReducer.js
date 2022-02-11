import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart-items";

export default combineReducers({ products, cart });
