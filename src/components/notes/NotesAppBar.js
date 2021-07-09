import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, starUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);

    const handleSave = () =>{
        //console.log(active);
        dispatch( startSaveNote( active))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( starUploading(file));
        }
    }



    return (
        <div className="notes__appbar">
            <span>28 Agosto 2020</span>

            <input
                id="fileSelector"
                type="file"
                name ="file"
                style= {{display:'none'}}
                onClick={handleFileChange}
            />
            
            <div    >
                <button className="btn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>
                <button className="btn"
                onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
