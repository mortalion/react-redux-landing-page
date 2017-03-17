import { combineReducers } from 'redux';
import TechnologiesReducer from './reducer_technologies';
import LogosReducer from './reducer_logos';

const rootReducer = combineReducers({
	technologies: TechnologiesReducer,
	logos: LogosReducer
});

export default rootReducer;
