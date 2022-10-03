import React from 'react';
import {ISong} from "../interfaces/ISong";
import './MusicCard.css'

interface IProps {
    song: ISong
}

const MusicCard:  React.FC<IProps> = ({song}) => {
    return (
        <li className="card">
            <img src={song.coverUrl}
                 className="cover"
                 alt={`Cover of the album ${song.album}`}/>

            <span className='name'>{song.name}</span>
            <span className='artist'>{song.artist}</span>
            <span className='album'>{song.album}</span>
        </li>
    )
}

export default MusicCard
