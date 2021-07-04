import {combineReducers} from 'redux';
import DropdownReducer from 'src/reducers/DropdownReducer';
import TitleReducer from 'src/reducers/TitleReducer';
import HandleImgReducer from 'src/reducers/HandleImgReducer';
import AddImageReducer from 'src/reducers/AddImageReducer';

const AllReducers = combineReducers({
    Title: TitleReducer,
    Dropdown: DropdownReducer,
    HandleImg: HandleImgReducer,
    AddImage: AddImageReducer
});

export default AllReducers;
