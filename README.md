# drpayopr.com Website

Professional GitHub Pages website for Dr. Jose Santiago Castillo.

## Publish with GitHub Pages

1. Create a new GitHub repository named `drpayopr.com` or `drpayopr`.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. In the Pages settings, enter your custom domain: `drpayopr.com`.
7. At your domain registrar, add the DNS records GitHub provides/recommends for a custom domain.
8. Enable **Enforce HTTPS** after DNS is active.

## Add Your Headshot

Replace the `.portrait-placeholder` block in `index.html` with:

```html
<img class="portrait-image" src="headshot.jpg" alt="Dr. Jose Santiago Castillo">
```

Then add this CSS to `styles.css`:

```css
.portrait-image {
  width: 100%;
  height: 440px;
  object-fit: cover;
  border-radius: 12px;
}
```

Upload your image to the same repository as `headshot.jpg`.

## Add Your Book Cover

Replace the `.book-cover-placeholder` block with:

```html
<img class="book-cover" src="book-cover.jpg" alt="LA CO-ENSEÑANZA book cover">
```

Add this CSS:

```css
.book-cover {
  width: 100%;
  max-width: 360px;
  box-shadow: 0 20px 50px rgba(0,0,0,.18);
}
```

## Activate the Contact Form

The site currently uses a Formspree placeholder:

`https://formspree.io/f/YOUR-FORM-ID`

Create a free Formspree account, create a form, then replace `YOUR-FORM-ID` in `index.html`.

## Files

- `index.html` — main website
- `styles.css` — design and responsive layout
- `script.js` — mobile menu and current year
- `CNAME` — custom domain for GitHub Pages
