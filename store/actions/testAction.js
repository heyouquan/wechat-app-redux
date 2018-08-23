export function changeText(text = 0) {
    return {
        type: 'ADD',
        payload: text
    }
}