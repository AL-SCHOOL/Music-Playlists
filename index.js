document.getElementById("bandPlaylist").style.display = "none";
document.getElementById("pokemonPlaylist").style.display = "none";
document.getElementById("marioLuigiPlaylist").style.display = "none";
document.getElementById("fridayNightPlaylist").style.display = "none";

function band() {
  document.getElementById("bandPlaylist").style.display = "block";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "none";
}

function pokemon() {
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "block";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "none";
}

function marioLuigi() {
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "block";
  document.getElementById("fridayNightPlaylist").style.display = "none";
}

function fridayNight() {
  document.getElementById("bandPlaylist").style.display = "none";
  document.getElementById("pokemonPlaylist").style.display = "none";
  document.getElementById("marioLuigiPlaylist").style.display = "none";
  document.getElementById("fridayNightPlaylist").style.display = "block";
}
