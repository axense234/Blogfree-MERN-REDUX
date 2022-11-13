// Constant variables
const CACHE_STORAGE = "v1Cache";
const base = "http://localhost:3000";

// On page load,we cache the respective page
this.addEventListener("install", async (e) => {
  try {
    const cache = await caches.open(CACHE_STORAGE);
    await cache.addAll([
      "/",
      "/signup",
      "/login",
      "/contactus",
      "/aboutus",
      "/search-results",
      "/blogs/create-blog",
      "/blogs/edit-blog/:blodId",
      "/blogs/view-blog/:blogId",
      "/authors/view-author/:authorId",
      "/authors/authors-list",
    ]);
  } catch (error) {
    console.log(error);
  }
});

// Fetching from cache
this.addEventListener("fetch", async (e) => {
  try {
    if (!navigator.onLine) {
      const res = await e.waitUntil(caches.match(e.request.url));
      if (res) {
        console.log(res);
        return res;
      }
    }
  } catch (error) {
    console.log(error);
  }
});
