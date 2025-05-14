const discoverItems = [
  {
    title: "🔥 Trending Now",
    description: "Explore what's hot and happening across the globe.",
    image: "trend.jpg"
  },
  {
    title: "🎧 Genre Based Picks",
    description: "From Pop to Lo-fi, dive deep into your favorite vibes.",
    image: "genre.jpg"
  },
  {
    title: "🌟 Editor’s Choice",
    description: "Curated playlists by music experts to match your mood.",
    image: "editor.jpg"
  },
  {
    title: "🆕 Fresh Drops",
    description: "Newly released songs added daily to keep you updated.",
    image: "fresh.jpg"
  }
];

const container = document.getElementById("discoverGrid");
const searchInput = document.getElementById("searchInput");

function renderDiscoverItems(items) {
  container.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "discover-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <button class="play-btn">▶ Play</button>
    `;
    container.appendChild(card);
  });
}

function handleSearch() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = discoverItems.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  renderDiscoverItems(filtered);
}

function shuffleDiscover() {
  const shuffled = [...discoverItems].sort(() => 0.5 - Math.random());
  renderDiscoverItems(shuffled);
}

document.addEventListener("DOMContentLoaded", () => {
  renderDiscoverItems(discoverItems);
  searchInput.addEventListener("input", handleSearch);
  document.getElementById("shuffleBtn").addEventListener("click", shuffleDiscover);
});
