import React from 'react'

export const JournalEntry = () => {
    return (
        <div className ="journal__entry pointer">
            <div 
            className="journal__entry-picture"
            style={{
                backgroundZise:'cover',
                backgroundImage:'url(https://www.fonditos3d.com/800x600/paisaje-nocturno-con-efectos-3d.jpg)'

            }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title"> 
                Un nuevo Dia
                </p>
                <p className="journal__entry-content">
                Lorem Ipsum es simplemente el texto de relleno 
                 
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
