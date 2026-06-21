const feeds = {
  news: [
    {
      name: "BBC",
      url: "https://www.bbc.com/news",
      headline: "Global headlines in one place",
      detail: "World coverage and live reporting",
    },
    {
      name: "Reuters",
      url: "https://www.reuters.com/",
      headline: "Breaking stories from major markets",
      detail: "Business, politics, and technology",
    },
    {
      name: "AP News",
      url: "https://apnews.com/",
      headline: "Top U.S. and international updates",
      detail: "Fast-moving stories and analysis",
    },
    {
      name: "Al Jazeera",
      url: "https://www.aljazeera.com/",
      headline: "Regional voices and global context",
      detail: "International perspectives and features",
    },
  ],
  social: [
    {
      author: "Maya Brooks",
      handle: "@mayabroadcast",
      platform: "X",
      post: "Watching city hall, tech, and transit stories converge into one major update tonight.",
      stats: "1.2K likes • 184 replies",
    },
    {
      author: "Daily Sports Recap",
      handle: "@dailysports",
      platform: "Instagram",
      post: "Photo dump from the weekend finals, locker-room reactions, and a preview of tomorrow’s matchup.",
      stats: "3.8K likes • 92 comments",
    },
    {
      author: "Neter Creators",
      handle: "@neterlive",
      platform: "YouTube",
      post: "New live stream queued: community reactions to the top stories shaping this week’s feed.",
      stats: "842 watching • 57 chat messages",
    },
  ],
};

function renderNews(items, targetId) {
  const list = document.getElementById(targetId);
  if (!list) return;

  list.innerHTML = "";
  items.forEach(({ name, url, headline, detail }) => {
    const article = document.createElement("article");
    article.className = "news-card";

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    const title = document.createElement("strong");
    title.textContent = headline;

    const summary = document.createElement("p");
    summary.textContent = detail;

    const source = document.createElement("small");
    source.textContent = name;

    anchor.append(title, summary, source);
    article.appendChild(anchor);
    list.appendChild(article);
  });
}

function renderPosts(items, targetId) {
  const list = document.getElementById(targetId);
  if (!list) return;

  list.innerHTML = "";
  items.forEach(({ author, handle, platform, post, stats }, index) => {
    const article = document.createElement("article");
    article.className = "social-card";

    const meta = document.createElement("div");
    meta.className = "social-meta";

    const authorBlock = document.createElement("div");
    const authorName = document.createElement("strong");
    authorName.textContent = author;
    const authorHandle = document.createElement("span");
    authorHandle.textContent = handle;
    authorBlock.append(authorName, authorHandle);

    const platformLabel = document.createElement("span");
    platformLabel.textContent = platform;

    meta.append(authorBlock, platformLabel);

    const content = document.createElement("p");
    content.textContent = post;

    const footer = document.createElement("div");
    footer.className = "social-stats";
    footer.textContent = stats;

    article.append(meta, content, footer);
    list.appendChild(article);

    if (index < items.length - 1) {
      const ad = document.createElement("div");
      ad.className = "ad-slot";
      ad.setAttribute("aria-label", "Advertisement space");
      ad.textContent = "Sponsored placement";
      list.appendChild(ad);
    }
  });
}

renderNews(feeds.news, "news-list");
renderPosts(feeds.social, "social-list");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}
