import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

            <textarea
                placeholder="What Happened Today"
                className="notes__textarea"
            >
                    
            </textarea>

            <div className="notes__image">
                <img
                    src="https://i.pinimg.com/564x/76/e2/62/76e262a7eadf680f116db013f8dfa59b.jpg"
                    alt="imagen"
                />
            </div>


            </div>
        </div>
    )
}
