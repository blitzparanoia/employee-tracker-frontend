export const deleteEmployee = (employeeId, companyId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/companies/${companyId}/employees/${employeeId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(company => dispatch({type: 'DELETE_EMPLOYEE', payload: company}))
  }
}
