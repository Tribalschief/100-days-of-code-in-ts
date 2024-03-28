"use strict";
//task 40
function make_album(name, album_title, tracks) {
    const artist = {
        name: name,
        album_title: album_title
    };
    if (tracks !== undefined) {
        artist.tracks = tracks;
    }
    return artist;
}
