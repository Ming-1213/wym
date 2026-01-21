import {
    useEffect
} from 'react'
import {
    useParams
} from'react-router-dom'
const UserProfile = () => {
    useEffect(() => {
        // const id = 
        const { id } = useParams();
        console.log(window.location);
    }, [])
    return (
        <>
        UserProfile { id }
        </>
    )
}

export default UserProfile;