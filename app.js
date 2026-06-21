const feeds = {
  news: [
    { name: "BBC", url: "https://www.bbc.com/news", detail: "Global headlines" },
    { name: "Reuters", url: "https://www.reuters.com/", detail: "Breaking coverage" },
    { name: "AP News", url: "https://apnews.com/", detail: "US and world news" },
    { name: "Al Jazeera", url: "https://www.aljazeera.com/", detail: "International updates" },
  ],
  social: [
    { name: "X", url: "https://x.com/", detail: "Trending conversations" },
    { name: "Reddit", url: "https://www.reddit.com/", detail: "Topic communities" },
    { name: "YouTube", url: "https://www.youtube.com/", detail: "Video and live streams" },
    { name: "Instagram", url: "https://www.instagram.com/", detail: "Photo and reel updates" },
  ],
};

function renderLinks(items, targetId) {
  const list = document.getElementById(targetId);
  if (!list) return;

  list.innerHTML = items
    .map(
      ({ name, url, detail }) => `
      <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <strong>${name}</strong>
          <small>${detail}</small>
        </a>
      </li>`
    )
    .join("");
}

renderLinks(feeds.news, "news-list");
renderLinks(feeds.social, "social-list");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
