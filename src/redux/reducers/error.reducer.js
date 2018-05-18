const errorReducer = (state={error: false}, action)=>{
    switch(action.type){
        case'ERROR_REGISTERING_USER':
            return {error: true}
        default:
            return state;
    }

}

export default errorReducer;