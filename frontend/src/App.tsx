import React, {useEffect, useState} from 'react';
import List from './components/List'
import './App.css';
import AddNewSong from "./components/AddNewSong";
import {ISong} from "./interfaces/ISong";

interface IState {
  songs: ISong[]
}

function App() {

  const [songs, setSongs]= useState<IState['songs']>([]);

  useEffect(() => {
    setSongs([
      {
        id: '0',
        name: 'It\'s gonna be Okay',
        artist: 'Artist 0',
        album: 'Life is Good',
        coverUrl: 'https://cdns-images.dzcdn.net/images/cover/f6d9995b4f281caaa06f29e8cc01f74e/264x264.jpg',
        releaseYear: 2022,
        notes: 'A great song',
      },
      {
        id: '1',
        name: 'Life is Beautiful',
        artist: 'Tim McMorris',
        album: 'Alive',
        coverUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51e2janAg%2BL._SY445_SX342_QL70_ML2_.jpg',
        releaseYear: 2022,
        notes: 'A great song',
      },
      {
        id: '2',
        name: 'Simple',
        artist: 'Bruno Mars',
        album: 'Simple',
        coverUrl: 'https://i.pinimg.com/originals/a2/f2/52/a2f2524042e30a7f1cbe73028052c3ec.jpg',
        releaseYear: 2022,
        notes: 'A great song',
      },
      {
        id: '3',
        name: 'Shape of You',
        artist: 'Ed Sheeran',
        album: 'Divide',
        coverUrl: 'https://cdns-images.dzcdn.net/images/cover/000a9228cecfcc7c2093d9cd7bb66447/500x500.jpg',
        releaseYear: 2022,
        notes: 'A great song',
      },
      {
        id: '4',
        name: 'Welcome to New York',
        artist: 'Taylor Swift',
        album: 'T.S. 1989',
        coverUrl: 'https://www.billboard.com/wp-content/uploads/2022/03/50.-Taylor-Swift-%E2%80%981989-2014-album-art-billboard-1240.jpg',
        releaseYear: 2022,
        notes: 'A great song',
      },
    ])
  },[])

  return (
    <div className="App">
      <h1>My favourite Songs</h1>
      <List songs={songs}   />
      <AddNewSong onAddNew={ ((newSong:ISong )=> {
        setSongs(prevState => ([
          ...prevState,
          newSong,
        ]))
      })} />
    </div>
  );
}

export default App;
