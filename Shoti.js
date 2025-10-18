const video = document.getElementById("video");
const username = document.getElementById("username");
const description = document.getElementById("description");
const region = document.getElementById("region");
const fetchBtn = document.getElementById("fetchBtn");
const downloadBtn = document.getElementById("downloadBtn");

async function loadRandomShoti() {
  fetchBtn.disabled = true;
  fetchBtn.textContent = "Wait lang akua pa gi fetch hulat ka diyut...";
  downloadBtn.disabled = true;

  try {
    const data = {
      username: "junrypacot",
      description: "Random shoti vibes 🎬",
      region: "Philippines",
      downloadUrl: "video.mp4"
    };

    username.textContent = "@" + (data.username || "Unknown");
    description.textContent = data.description || "No description available.";
    region.textContent = "Region: " + (data.region || "N/A");
    video.src = data.downloadUrl;

    video.autoplay = true;
    video.loop = true;
    video.muted = false;
    video.play().catch(() => {
      const playButton = document.createElement("button");
      playButton.textContent = "Play Video";
      playButton.style.position = "absolute";
      playButton.style.top = "50%";
      playButton.style.left = "50%";
      playButton.style.transform = "translate(-50%, -50%)";
      playButton.style.padding = "15px 25px";
      playButton.style.background = "#ff0055";
      playButton.style.color = "#fff";
      playButton.style.border = "none";
      playButton.style.borderRadius = "10px";
      playButton.style.fontSize = "1rem";
      playButton.style.cursor = "pointer";
      playButton.onclick = () => {
        video.play();
        playButton.remove();
      };
      document.body.appendChild(playButton);
    });

    downloadBtn.disabled = false;
    downloadBtn.onclick = () => {
      const a = document.createElement("a");
      a.href = data.downloadUrl;
      a.download = "shoti_random.mp4";
      a.click();
    };
  } catch (err) {
    alert("Error fetching video.");
  } finally {
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Click this to fetch Random Video";
  }
}

fetchBtn.addEventListener("click", loadRandomShoti);
loadRandomShoti();
