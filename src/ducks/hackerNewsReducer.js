import axios from 'axios'

//SET STATE
let initialState = {
    loading: false,
    articles: []
}

//ACTION TYPE-this is a request
const REQUEST_ARTICLES = "REQUEST_ARTICLES"

//ACTION CREATOR
export function requestArticles() {
    let data = axios.get('/api/hacker-news')
    .then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_ARTICLES + '_PENDING':
            return {...state, loading: true};
        case REQUEST_ARTICLES + '_FULFILLED':
            return {loading: false, data: action.payload}
        case REQUEST_ARTICLES + '_REJECTED':
            return {...state, loading: false}
        default:
            return state;
        
    } 
}