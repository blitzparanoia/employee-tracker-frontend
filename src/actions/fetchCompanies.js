// action creator: is a function,  an action object is returned, the action object is dispatched to the reducer, reducer returns new state
export function fetchCompanies() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/companies', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(companies => dispatch({
            type: 'FETCH_COMPANIES',
            payload: companies
        }))

    }
}
