const initialState = {
    results : [],
    data: {},
    isLoading:false,
    isError:false,
}

const exampleReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_EXAMPLE_PENDING":
            return {isLoading:true}
        case "GET_ALL_EXAMPLE_FULFILLED":
            return { ...state , isLoading:false, results:action.payload.data.data}    
        case "GET_ALL_EXAMPLE_REJECTED":
            return {isLoading:false,isError:true}
        default:
            return state
    }
}
export default exampleReducer