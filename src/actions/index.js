// Action creator
export const SelectedSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
