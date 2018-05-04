export const LOADING ={
    START: 'LOADING',
    DONE: 'LOADING_DONE'
}

export const loadingStart=()=>{
    return {type: LOADING.START}
}

export const loadingDone =()=>{
   return { type: LOADING.DONE }
}