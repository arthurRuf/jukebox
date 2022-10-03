import React, {useState} from 'react';
import {ISong, ISongWithoutId} from "../interfaces/ISong";
import './AddNewSong.css'

interface IProps {
    onAddNew: (newSong:ISong) =>  void,
}

const initialFormValues :ISongWithoutId= {
    name: '',
    artist: '',
    album: '',
    coverUrl: '',
    releaseYear: 0,
    notes: '',
}

const AddNewSong: React.FC<IProps> = ({onAddNew}) => {
    const [formValues, setFormValues] = useState<ISongWithoutId>(initialFormValues)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) :void=>{
        setFormValues((prevState: any) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleAddSong = ():void => {
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

    return (<div>
        <h2>Add new Song</h2>
        <div className="form">
            <input type="text" placeholder="Name" name="name" value={formValues.name} onChange={handleChange} />
        <input type="text" placeholder="Artist" name="artist" value={formValues.artist} onChange={handleChange} />
        <input type="text" placeholder="Album" name="album" value={formValues.album} onChange={handleChange} />
        <input type="text" placeholder="Cover URL" name="coverUrl" value={formValues.coverUrl} onChange={handleChange} />
        <input type="number" placeholder="Release Year" name="releaseYear" value={formValues.releaseYear} onChange={handleChange} />
            <textarea placeholder="Notes" name="notes" value={formValues.notes} onChange={handleChange} />
            <div>
                <button onClick={handleAddSong}>Add Song</button>
            </div>

        </div>
    </div>)
}

export default AddNewSong;
