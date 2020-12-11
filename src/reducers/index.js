 import { combineReducers } from 'redux';

const songsReducer =  () => {
    return [
        {
            title: 'Everlasting Light',
            duration: '4:05'
        },
        {
            title: 'Macarena',
            duration: '2:30'
        },
        {
            title: 'Halfway Up',
            duration: '3:29'
        },
        {
            title: 'Embers',
            duration: '2:14'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSongKey: selectedSongReducer
});