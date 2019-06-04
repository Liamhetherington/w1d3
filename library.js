var library = {
    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },
    printPlaylists: function() {
        for (var key in this.playlists) {
            var obj = this.playlists[key];
            console.log(obj.id + ": " + obj.name + " - " + obj.tracks.length + " tracks");
        }
    },
    printTracks: function() {
        for (var key in this.tracks) {
            var song = this.tracks[key];
            console.log(song.id + ": " + song.name + " by " + song.artist + " (" + song.album + ")");
        }
    },
    printPlaylist: function(playlistId) {
        var obj = this.playlists[playlistId];
        var song = this.playlists[playlistId].tracks;
        console.log(obj.id + ": " + obj.name + " - " + obj.tracks.length + " tracks");
        for (var i = 0; i < song.length; i++) {
            var currentSong = song[i];
            var songList = this.tracks;
            console.log(currentSong + ": " + songList[currentSong].name + " by " + songList[currentSong].artist + " (" + songList[currentSong].album + ")");
        }
    },
    addTrackToPlaylist: function(trackId, playlistId) {
        var playlists = this.playlists;
        var playlist = playlists[playlistId];
        var tracks = playlist.tracks;
        tracks.push(trackId);
        return tracks;
    },
    addTrack: function(name, artist, album) {
        var id = uid();
        this.tracks[id] = {
            id: id,
            name: name,
            artist: artist,
            album: album
        }
        return this.tracks;
    },
    addPlaylist: function(name) {
        var id = uid();
        this.playlists[id] = {
            id: id,
            name: name,
            tracks: []
        }

        return this.playlists
    }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


printPlaylists();



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist("p01");


// adds an existing track to an existing playlist

addTrackToPlaylist("t03", "p02");



// console.log(addTrackToPlaylist("t01", "p02"));
// console.log(addTrackToPlaylist("t02", "p02"));

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {

    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library


console.log(addTrack("Californication", "Red Hot CP", "cali"));

// adds a playlist to the library


console.log("Liam's playlist", ["t01, t03"])


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }