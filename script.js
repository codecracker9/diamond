// Floating heart sprinkle
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 300);
  
  // YouTube Player API
  let player;
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: '5fK5nZUBbhI', // Example: Embed-friendly song
      playerVars: {
        autoplay: 0,
        loop: 1,
        playlist: '5fK5nZUBbhI'
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("surprise-btn");
    const message = document.getElementById("hidden-message");
    const musicBtn = document.getElementById("music-btn");
  
    btn.addEventListener("click", () => {
      message.classList.remove("hidden");
      message.classList.add("show");
  
      btn.disabled = true;
      btn.style.opacity = "0.6";
      btn.style.cursor = "default";
      btn.textContent = "🎁 Surprise Unlocked!";
    });
  
    musicBtn.addEventListener("click", () => {
      if (player && player.playVideo) {
        player.unMute();
        player.playVideo();
        musicBtn.disabled = true;
        musicBtn.textContent = "🎶 Playing...";
        musicBtn.style.opacity = "0.6";
        musicBtn.style.cursor = "default";
      }
    });
  
    const movieBtn = document.getElementById("movie-btn");
    const movieMessage = document.getElementById("movie-message");
  
    movieBtn.addEventListener("click", () => {
      movieMessage.classList.remove("hidden");
      movieMessage.classList.add("show");
  
      movieBtn.disabled = true;
      movieBtn.textContent = "🎬 Deal Sealed!";
      movieBtn.style.opacity = "0.6";
      movieBtn.style.cursor = "default";
    });
  });
  