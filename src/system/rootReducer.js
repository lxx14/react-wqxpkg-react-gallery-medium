import { combineReducers } from 'redux';
import gallery from '../components/Pages/Gallery/reducer';
import header from '../components/Header/reducer';

export default combineReducers({
  gallery,
  header
})