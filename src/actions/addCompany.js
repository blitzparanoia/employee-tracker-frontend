export const addCompany = data => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/companies`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(company => {dispatch({type: 'ADD_COMPANY', payload: company})
    });
};
}
