export default function companyReducer(state = {companies: []}, action ) {

    switch (action.type) {
        case 'FETCH_COMPANIES':
            return {companies: action.payload}

        case 'ADD_COMPANY':
            return{
                ...state, 
                companies: [...state.companies, action.payload]}




        default:
            return state

    }
}