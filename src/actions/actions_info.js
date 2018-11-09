export const INFO_FETCHED = 'INFO_FETCHED';
export const NEW_INFO = 'NEW_INFO';

export function fetchInfo() {
    return (dispatch) => {
        return fetch('http://www.json-generator.com/api/json/get/bVGbNZouuW?indent=2', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            dispatch(loadInfo(json))
        })
        .catch(error => console.log(error))
    }   
}

export function postInfo() {
    return (dispatch) => {
        return fetch('http://www.json-generator.com/api/json/get/bVGbNZouuW?indent=2', {
            method: 'POST',
            body: JSON.stringify({hi: 'info'})
        })
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            dispatch(loadInfo(json))
        })
        .catch(error => console.log(error))
    }   
}

export function loadInfo(results) {
    return {
        type: INFO_FETCHED,
        payload: results
    }
}

export function newInfo(info) {
    return {
        type: NEW_INFO,
        payload: info
    }
}