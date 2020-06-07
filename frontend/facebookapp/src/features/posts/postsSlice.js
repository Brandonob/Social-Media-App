import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        recieveAllPosts: (state, action) => action.payload
    }
})

export const fetchAllPosts = () => async dispatch => {
    try {
        let res = await axios.get("/posts");
        const { posts } = res.data.body;
        debugger
        dispatch(recieveAllPosts(posts))
    } catch (error) {
        console.log(error.message);
    }
}

export const { recieveAllPosts } = postsSlice.actions;
export default postsSlice.reducer;