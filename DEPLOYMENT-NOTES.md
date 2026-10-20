# DRPAYOPR Podcast Hub — deployment notes

Fixed Podcast navigation: Podcast now opens Impact & Insights at the podcast section, including on direct links and browser back/forward.

Logo files are included in the same folder as index.html. Upload ALL files, including drpayopr-logo-official.png and lean-education-official-logo.png, keeping names and capitalization unchanged. Do not upload index.html alone.

IMPORTANT: The original podcast MP4 is ~116 MB, exceeding GitHub's 100 MB per-file limit. The LIGHT deployment ZIP omits the MP4. To enable the player, host the video on a video/CDN host and replace `1-plus-1-con-dr-payo-podcast.mp4` in index.html with its actual public video URL, or use an appropriately optimized video smaller than the hosting platform's limits. The FULL ZIP includes the MP4 for backup/local use, but may not deploy to GitHub as-is.

Do not rename image files or change the relative paths unless you update the HTML references.
