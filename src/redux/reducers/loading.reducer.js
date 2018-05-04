const initialState = {
    loading: false,
}

const loading = (state=initialState, action)=>{
    switch(action.type){
        case 'LOADING':
            return {loading: true};
        case 'LOADING_DONE':
            return {loading: false};
        default:
            return state
    }
}

export default loading;