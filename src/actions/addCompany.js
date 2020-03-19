export function addCompany() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/companies', {
            headers: {
                'Content-Type': 'application/json'
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(company => dispatch({
            type: 'ADD_COMPANY'
            payload: 'company'
        }))
    }
}