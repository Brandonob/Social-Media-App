import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAllPosts } from '../posts/postsSlice'
import CreatePostForm from '../universal/CreatePostForm'
import '../../css/homeCss.css'
import Posts from '../universal/Posts'
import LeftContainer from '../homePage/LeftContainer'
import { logout } from '../../util/firebaseFunctions'
import { logOutUser } from '../users/usersSlice'

const DisplayHome = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        logout();
        dispatch(logOutUser())
        history.push("/")

    }

    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [])
    return (
        <div className="home">
            <div className="leftSide">
                <LeftContainer/>
            </div>
            <div className="middle">
                <Posts/>
            </div>
            <div className="rightSide">
                <button onClick={handleClick}>Log Out</button>
                <h5>Birthdays</h5>
                <h5>Friends</h5>
            </div>
        </div>
    )
}

export default DisplayHome
