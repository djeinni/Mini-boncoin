import {combineReducers} from 'redux';
import annonce from "./annonceReducer";

const rootReducer = combineReducers({
    annonce: annonce
});

export default rootReducer;