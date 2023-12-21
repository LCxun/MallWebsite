

import React, { useState, useEffect } from 'react'
import '../../style/clock.css'

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;
    const countDown = () => {
        const destination = new Date('2024-1-1').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))

            const seconds = Math.floor(different % (1000 * 60) / (1000))

            if (different < 0) {
                clearInterval(interval.current)
            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }

        })
    }

    useEffect(() => {
        countDown()
    })



    return (
        <div className="clock-wrapper d-flex align-items-center gap-3">
            <div className="clock-data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>
                        {days}天
                    </h1>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock-data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>
                        {hours}时
                    </h1>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock-data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>
                        {minutes}分
                    </h1>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock-data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>
                        {seconds}秒
                    </h1>
                </div>
                {/* <span className='text-white fs-3'>:</span> */}
            </div>

        </div>
    )
}

export default Clock




















