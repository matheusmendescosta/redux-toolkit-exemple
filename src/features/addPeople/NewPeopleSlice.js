import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    people: []
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState, //define o initial state

    reducers: {
        //vamos definir o reducer
        addPeople: (state, action) => {
            state.people = [...state.people, action.payload]
        },
        removePeople: (state, action) => {
            state.people = state.people.filter((p) => p.id !== action.payload.id)
        }
    }
});

export const { addPeople, removePeople } = peopleSlice.actions

export default peopleSlice.reducer