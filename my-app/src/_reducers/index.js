import { combineReducers } from "../_helpers/node_modules/redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
	authentication,
	registration,
	users,
	alert
});

export default rootReducer;
