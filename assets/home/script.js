// Theme toggle
function updateThemeToggle() {
  if (htmlElement.classList.contains("dark")) {
    themeToggle.innerHTML = `Light Mode`;
  } else {
    themeToggle.innerHTML = `Dark Mode`;
  }
}

function toggleTheme() {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  updateThemeToggle();
}

// Metadata loading: fetch external JSON configuration
// Note: Moved to index.html for easier project setup

// Display folders given data and metadata
function displayFolders(data, metadata) {
  const folderList = document.getElementById("folderList");
  folderList.innerHTML = "";
  let folders = data.filter((item) => item.type === "dir");

  // Exclude folders specified in metadata (or default)
  const excludeFolders = metadata.exclude || [];
  folders = folders.filter((folder) => !excludeFolders.includes(folder.name));

  // Map friendly names (metadata takes precedence)
  folders.forEach((folder) => {
    const friendlyName =
      metadata.friendlyNames && metadata.friendlyNames[folder.name]
        ? metadata.friendlyNames[folder.name]
        : folder.name.replace(/-/g, " ");
    folder.friendlyName = friendlyName;
    folder.searchText =
      folder.name.toLowerCase() + " " + friendlyName.toLowerCase();
  });

  // Initial sort (alphabetical A-Z)
  folders.sort((a, b) => a.friendlyName.localeCompare(b.friendlyName));
  if (folders.length === 0) {
    document.getElementById("fallback").classList.remove("hidden");
  } else {
    folders.forEach((folder) => {
      const li = document.createElement("li");
      li.classList.add("fade-in");
      li.dataset.search = folder.searchText;
      li.innerHTML = `
      <a href="/${metadata.repoName}/${folder.name}" tabindex="0" class="block p-4 bg-white dark:bg-gray-800 rounded shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition text-center transform hover:-translate-y-1 focus:outline-none focus:ring focus:ring-blue-300"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
      ${folder.friendlyName}
      </a>`;

      folderList.appendChild(li);
    });
  }

  // Show folder list and hide loading spinner
  document.getElementById("folderList").classList.remove("hidden");
  document.getElementById("loading").classList.add("hidden");
}
/*
Caching is optional-you don’t strictly need it if your repository is small or rarely accessed, but it can be very useful if you want to reduce API calls (and avoid hitting GitHub’s rate limits) and improve page load speed by storing results temporarily.
If your projects update infrequently, a short cache duration (e.g., 1 hour or 3600000 milliseconds) can give users a snappier experience.
If your projects update frequently, you might want to decrease the cache duration or remove it entirely.
*/
// Fetch folders with caching and load metadata to construct API URL from config
async function fetchFolders() {
  const cacheKey = "folderData";
  const cacheTimeKey = "folderDataTime";
  const now = Date.now();
  let metadata = await loadMetadata();
  if (!metadata.repoOwner || !metadata.repoName) {
    console.error(
      "repoOwner and repoName must be specified in the configuration."
    );
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("fallback").classList.remove("hidden");
    document.getElementById("fallback").textContent =
      "Configuration error: repoOwner and repoName not specified.";
    return;
  }
  const apiUrl = `https://api.github.com/repos/${metadata.repoOwner}/${metadata.repoName}/contents/`;
  let data;
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(cacheTimeKey);
  if (cached && cacheTime && now - cacheTime < 3600000) {
    data = JSON.parse(cached);
  } else {
    try {
      const res = await fetch(apiUrl);
      data = await res.json();
      localStorage.setItem(cacheKey, JSON.stringify(data));
      localStorage.setItem(cacheTimeKey, now);
    } catch (error) {
      console.error("Error fetching repository contents:", error);
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("fallback").classList.remove("hidden");
      return;
    }
  }
  displayFolders(data, metadata);
}

// Sorting functionality
function sortFolders(order) {
  const list = Array.from(document.querySelectorAll("#folderList li"));
  list.sort((a, b) => {
    const nameA = a.querySelector("a").textContent.trim().toLowerCase();
    const nameB = b.querySelector("a").textContent.trim().toLowerCase();
    return order === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });
  const folderList = document.getElementById("folderList");
  folderList.innerHTML = "";
  list.forEach((li) => folderList.appendChild(li));
}

// Attach search handler
function attachSearchHandler() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll("#folderList li").forEach((li) => {
      li.style.display = li.dataset.search.includes(query) ? "block" : "none";
    });
  });
}

// Attach sort handler
function attachSortHandler() {
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", function () {
    sortFolders(this.value);
  });
}

// Back to Top button functionality
function attachBackToTopHandler() {
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove("opacity-0", "pointer-events-none");
    } else {
      backToTop.classList.add("opacity-0", "pointer-events-none");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Global variables and initialization
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const fallbackElem = document.getElementById("fallback");

// Theme toggle initialization
function updateThemeToggle() {
  if (htmlElement.classList.contains("dark")) {
    themeToggle.innerHTML = `Light Mode`;
  } else {
    themeToggle.innerHTML = `Dark Mode`;
  }
}
if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
}
updateThemeToggle();
themeToggle.addEventListener("click", toggleTheme);

// Initialize all features
attachSearchHandler();
attachBackToTopHandler();
attachSortHandler();
fetchFolders();
