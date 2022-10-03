import React from 'react'
import MusicCard from "./MusicCard";
import {ISong} from "../interfaces/ISong";
import './List.css'

interface IProps {
    songs: ISong[]
}

const List: React.FC<IProps> = ({songs}) => {
    return (<ul style={{listStyle:'none',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }}>
        {songs.map(song =><MusicCard key={song.id} song={song} />)}
    </ul>);
}

export default List;
