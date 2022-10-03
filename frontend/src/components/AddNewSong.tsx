import React, {useState} from 'react';
import {ISong, ISongWithoutId} from "../interfaces/ISong";
import './AddNewSong.scss'

interface IProps {
    onAddNew: (newSong: ISong) => void,
}

const initialFormValues: ISongWithoutId = {
    name: '',
    artist: '',
    album: '',
    coverUrl: '',
    releaseYear: 0,
    notes: '',
}

const AddNewSong: React.FC<IProps> = ({onAddNew}) => {
    const [formValues, setFormValues] = useState<ISongWithoutId>(initialFormValues)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormValues((prevState: any) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!formValues.name ||
            !formValues.artist ||
            !formValues.album ||
            !formValues.coverUrl ||
            !formValues.releaseYear
        ) {
            alert('Please fill the name')
            return;
        }

        onAddNew({
            ...formValues,
            id: Math.random().toString(),
            releaseYear: formValues.releaseYear.valueOf(),
        });

        setFormValues(initialFormValues);
    }

    return (<div className="form-wrapper">
        <h2>Add new song to the list</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
            <label htmlFor="artist">Artist</label>
            <input type="text" name="artist" value={formValues.artist} onChange={handleChange}/>
            <label htmlFor="album">Album</label>
            <input type="text" name="album" value={formValues.album} onChange={handleChange}/>
            <label htmlFor="coverUrl">Cover URL</label>
            <input type="text" name="coverUrl" value={formValues.coverUrl} onChange={handleChange}/>
            <label htmlFor="releaseYear">Release Ye</label>
            <input type="number" name="releaseYear" value={formValues.releaseYear} onChange={handleChange}/>
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" value={formValues.notes} onChange={handleChange}/>

            <div>
                <button type="submit">Add Song</button>
            </div>
        </form>
    </div>)
}

export default AddNewSong;
