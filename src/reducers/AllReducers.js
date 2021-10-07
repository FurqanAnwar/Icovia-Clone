import {combineReducers} from 'redux';
import DropdownReducer from 'src/reducers/DropdownReducer';
import TitleReducer from 'src/reducers/TitleReducer';
import HeaderTitleReducer from 'src/reducers/HeaderTitleReducer';
import HandleImgReducer from 'src/reducers/HandleImgReducer';
import AddImageReducer from 'src/reducers/AddImageReducer';

const AllReducers = combineReducers({
    Title: TitleReducer,
    Dropdown: DropdownReducer,
    HandleImg: HandleImgReducer,
    AddImage: AddImageReducer,
    HeaderTitle: HeaderTitleReducer
});

export default AllReducers;
