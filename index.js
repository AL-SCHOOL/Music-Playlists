function home() {
  document.getElementById("title").innerHTML = "Home";
  document.getElementById("homepage").style.display = "block";
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "none";
  document.getElementById("personalPlaylist").style.display = "none";
}

function band() {
  document.getElementById("title").innerHTML = "Band Playlist";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("bandPlaylist").style.display = "block";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "none";
  document.getElementById("personalPlaylist").style.display = "none";
}

function pokemon() {
  document.getElementById("title").innerHTML = "Pokémon Playlist";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "block";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "none";
  document.getElementById("personalPlaylist").style.display = "none";
}

function marioLuigi() {
  document.getElementById("title").innerHTML = "Mario & Luigi Playlist";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "block";
  document.getElementById("fridayNightPlaylist").style.display = "none";
  document.getElementById("personalPlaylist").style.display = "none";
}

function fridayNight() {
  document.getElementById("title").innerHTML = "Friday Night Funkin' Playlist";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "block";
  document.getElementById("personalPlaylist").style.display = "none";
}

function personal() {
  document.getElementById("title").innerHTML = "Personal Playlist";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "none";
  document.getElementById("personalPlaylist").style.display = "block";
}

function hKeyPress() {
  var H = 72;
  var KeyH = false;
  const keydownHandler = event => {
    if (event.keyCode == H) {
      document.getElementById("navButton").style.display = "none";
    }
  }
}

hKeyPress();
