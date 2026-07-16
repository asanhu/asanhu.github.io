module.exports = function (eleventyConfig) {
  // Copy CSS and images straight through
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // Human-readable date, e.g. "13 July 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });

  // ISO date for <time datetime="">
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // RFC 3339 date for the Atom feed
  eleventyConfig.addFilter("rfc3339", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Make a URL absolute for the feed
  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    return new URL(url, base).href;
  });

  // Newest post date (for the feed's <updated>)
  eleventyConfig.addFilter("newestDate", (posts) => {
    if (!posts || !posts.length) return new Date();
    return new Date(Math.max(...posts.map((p) => p.date)));
  });

  // The categories used for nav + category pages
  eleventyConfig.addCollection("categories", () => [
    "travel",
    "books",
    "life",
    "epiphanies",
  ]);

  // Categories rendered as simple post lists (books has its own page)
  eleventyConfig.addCollection("listCategories", () => [
    "travel",
    "life",
    "epiphanies",
  ]);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
