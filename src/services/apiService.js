//Base url of APIs.
const baseUrl = "https://apertum-interview.herokuapp.com/api/";

export const loginAPIcall = (username, password) => {
    const apiUrl = `${baseUrl}user/login/`;
    return fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            accountId: username,
            pswd: password
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    });
}

export const getUsers = () => {
    const apiUrl = `${baseUrl}users/`
    const token = localStorage.getItem('token');
    return fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    }).then(res => res.json());
}