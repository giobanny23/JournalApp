import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        
        if( note.id !== activeId.current ){
            reset( note);
            activeId.current = note.id
        }

        //Como seleccionar notas y no crear un
        //ciclo infinito
        
    }, [note, reset])

    return (
        <div className="note__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

            <textarea
                placeholder="What Happened Today"
                className="notes__textarea"
                value={ body}
                onChange={handleInputChange}
            >
                    
            </textarea>
                    {
                        (note.url)
                        && (
                         <div className="notes__image">
                            <img
                            src="https://i.pinimg.com/564x/76/e2/62/76e262a7eadf680f116db013f8dfa59b.jpg"
                            alt="imagen"
                            />
                             </div>
                        )
                    }
            </div>
        </div>
    )
}
