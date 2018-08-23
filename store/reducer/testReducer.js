export default function testReducer(state={text: 0}, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD':
            return {...state, text: payload}
        default:
            return state    
    }
}