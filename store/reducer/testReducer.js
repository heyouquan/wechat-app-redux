export default function testReducer(state={}, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD':
            return {...state, text: payload}    
        default:
            return state    
    }
}