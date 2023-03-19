// YouTube API key
const API_KEY = "YOUR_YOUTUBE_API_KEY";

function searchSong(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input").value;
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&type=video&key=${API_KEY}`;
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      const videoId = data.items[0].id.videoId;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      const audioUrl = `https://www.youtubeinmp3.com/fetch/?video=${videoUrl}`;
      const songTitle = data.items[0].snippet.title;
      const songArtist = data.items[0].snippet.channelTitle;
      const songAlbum = "Unknown Album";
      document.getElementById("song-title").textContent = songTitle;
      document.getElementById("song-artist").textContent = `Artist: ${songArtist}`;
      document.getElementById("song-album").textContent = `Album: ${songAlbum}`;
      document.getElementById("audio-source").setAttribute("src", audioUrl);
      document.getElementsByTagName("audio")[0].load();
      document.getElementsByTagName("audio")[0].play();
    })
    .catch(error => console.error(error));
}
