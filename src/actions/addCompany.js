export const addCompany = data => {
  console.log('b')
  return dispatch => {
    console.log('c')
    fetch(`http://localhost:3000/api/v1/companies`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(company => {
        console.log('d')
        dispatch({type: 'ADD_COMPANY', payload: company})
      });
  };
  console.log('e')
}
