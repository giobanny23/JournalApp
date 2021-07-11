import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {


    const dispatch = useDispatch();

    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title, id } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        
        if( note.id !== activeId.current ){
            reset( note);
            activeId.current = note.id
        }

        //Como seleccionar notas y no crear un
        //ciclo infinito
        
    }, [note, reset])

    useEffect(() => {

       dispatch(activeNote( formValues, {...formValues} ) );
        
    }, [formValues,dispatch])


    const handleDelete = () => {
        dispatch( startDeleting( id));
    }

    return (
        <div className="note__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

            <textarea
                placeholder="What Happened Today"
                className="notes__textarea"
                name="body"
                value={ body}
                onChange={handleInputChange}
            >
                    
            </textarea>
                    {
                        (note.url)
                        && (
                         <div className="notes__image">
                            <img
                            src={note.url}
                            alt="imagen"
                            />
                             </div>
                        )
                    }
            </div>
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>

        </div>
    )
}
