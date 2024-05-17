let UsersPlaylist = [];

function addASong() {
    let TheSongsName = prompt("Please Enter the name of the song you would like to add:");

    if (TheSongsName) {
        UsersPlaylist.push(TheSongsName);
        alert(`${TheSongsName} has been added to the playlist.`);
        console.log(UsersPlaylist);
    } else {
        alert("The name of the song isn't correct. Please try again.");
    }
}

function removeASong() {
    let RemoveSong = prompt("Please Enter the name of the song you would like to remove:");

    let i = UsersPlaylist.indexOf(RemoveSong);

    if (i !== -1) {
        UsersPlaylist.splice(i, 1);
        alert(`This song has been removed: ${RemoveSong}`);
        console.log(UsersPlaylist);

    } else {
        alert(`${RemoveSong} is not found in the playlist.`);
    }
}

function CheckPlaylist() {
  alert(UsersPlaylist)
}

function ShowUpInWebsite() {
    let playlistContainer = document.getElementById('playlistContainer');
    playlistContainer.innerHTML = ''; 

    if (UsersPlaylist.length === 0) {
        playlistContainer.innerHTML = '<p>No songs in the playlist.</p>';
    } else {
        UsersPlaylist.forEach(function(song) {
            let songElement = document.createElement('p');
            songElement.className = 'song';
            songElement.textContent = song;
            playlistContainer.appendChild(songElement);
        });
    }
}