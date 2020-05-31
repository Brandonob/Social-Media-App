import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: {},
        recentUsers: []
    },
    reducers: {
        addUser: (state, action) => {
            state["currentUser"] = action.payload
            state["recentUsers"].push(action.payload)
        }
    }
})

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;