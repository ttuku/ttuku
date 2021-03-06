import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { room } from '../../state'
import { socket } from '../../utils'
import RoomPlayer from './RoomPlayer'

const Room = () => {
    const [currentRoom] = useRecoilState(room)
    if (!currentRoom) return <Redirect to="/" />

    useEffect(() => {
        return () => {
            socket.emit('leaveRoom')
        }
    }, [])

    return (
        <div style={{ marginTop: 30 }} className="flex flex-col h-full">
            <div
                style={{
                    backgroundColor: '#263238',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#fff',
                    padding: '16px 50px',
                }}
                className="flex items-center"
            >
                <FontAwesomeIcon
                    icon={['fas', 'gamepad']}
                    style={{ marginRight: 12, fontSize: 25 }}
                />

                {currentRoom.name}
            </div>
            <div
                style={{
                    backgroundColor: '#263238',
                    color: '#fff',
                    padding: '27px 49px',
                    marginTop: 5,
                    flexGrow: 1,
                    gap: 40,
                    height: 0,
                    overflowY: 'scroll',
                }}
                className="grid-cols-4 grid"
            >
                <RoomPlayer />
                <RoomPlayer />
                <RoomPlayer />
                <RoomPlayer />
                <RoomPlayer />
                <RoomPlayer />
                <RoomPlayer />
                <RoomPlayer />
            </div>
        </div>
    )
}

export default Room
