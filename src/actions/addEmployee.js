export const addEmployee = (employee, companyId) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/companies/${companyId}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })
    .then(res => res.json())
    .then(company => {dispatch({type: 'ADD_EMPLOYEE', payload: company})
  });
};
}
