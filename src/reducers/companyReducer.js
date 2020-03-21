export default function companyReducer(state = {companies: []}, action ) {

    switch (action.type) {
        case 'FETCH_COMPANIES':
            return {companies: action.payload}

        case 'ADD_COMPANY':
            return {...state, companies: [...state.companies, action.payload]}

        case 'ADD_EMPLOYEE':
        let companies = state.companies.map(company => {
            if (company.id === action.payload.id) {
                return action.payload
            } else {
                return company
            }
        })
        return {...state, companies: companies}
        
        default:
            return state

    }
}
