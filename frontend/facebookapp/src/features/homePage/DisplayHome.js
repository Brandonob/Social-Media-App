import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllPosts } from '../posts/postsSlice'
import CreatePostForm from '../universal/CreatePostForm'
import '../../css/homeCss.css'

const DisplayHome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [])
    return (
        <div className="home">
            <div className="leftSide">Hi</div>
            <div className="middle">Hi</div>
            <div className="rightSide">Hi</div>
        </div>
    )
}

export default DisplayHome
