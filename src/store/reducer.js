const defaultState = {
    inputValue: '',
    list: []
}

//note that it is not allowed to change the State directly, instead, we declare a newState,
//and copy the old State to the newState
export default (state=defaultState, action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value; // change the inputValue
        return newState;
    }

    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue); //when button is clicked, push it to the list
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }

    if (action.type === 'delete_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    //console.log(state, action);
    return state;
}
