import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import { useRecoilValue } from 'recoil'
// import { tokenState } from './state'

const Root = () => {
    // const [user, setUser] = useRecoilState(userState)
    //
    // useEffect(() => {
    //     if (!token) return setUser(false)
    //     axios.defaults.headers.common.Authorization = `Bearer ${token}`
    //     ;(async () => {
    //         try {
    //             const { data: user } = await axios.get('/api/users/@me')
    //             setUser(user)
    //         } catch {
    //             setUser(false)
    //         }
    //     })()
    // }, [token])

    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default Root
