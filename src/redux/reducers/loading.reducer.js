import {LOADING} from '../actions/loadingActions';

const initialState = {
    loading: false,
}

const loading = (state=initialState, action)=>{
    switch(action.type){
        case LOADING.START:
            return {loading: true};
        case LOADING.DONE:
            return {loading: false};
        default:
            return state
    }
}

export default loading;