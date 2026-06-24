# Tucker Trade

One-page Astro site backed by Sanity. The existing art direction is preserved in reusable Astro components; page-wide content comes from one Sanity singleton, while shows and merch are small independent collections.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Without Sanity environment variables, the site renders its original local content and image assets. This is intentional: the design can be reviewed before a CMS project exists.

## Connect Sanity

1. Create a Sanity project and a public dataset (normally `production`) in Sanity Manage.
2. Copy `.env.example` to `.env` and replace both project ID values with your project ID. Keep the public and Studio dataset names the same unless there is a deliberate reason not to.
3. Start the Studio with `npm run studio`, sign in, and open the local Studio URL it prints.
4. In **Site settings**, add the artist name, browser metadata, hero/bio content, embeds, press assets, and contact/social links.
5. Add **Shows** and **Merch** documents from the Studio navigation. Publishing a date as `Past` places it in the past-shows list; every other status appears in the upcoming section.

The public site is statically generated. Run `npm run build` (or trigger your host’s rebuild hook) after publishing content for changes to appear on the deployed site.

## Content reference

- **Site settings**: artist intro, hero and feature images, SoundCloud players, YouTube videos, press/media cards, social links, contact email, and SEO text.
- **Shows**: date, venue, location, status, ticket link, and upcoming/past state.
- **Merch**: product image, name, price, description, shop URL, and display order.

SoundCloud entries expect the `src` URL from SoundCloud’s standard player embed. YouTube entries accept regular `youtube.com` or `youtu.be` video URLs and render through YouTube’s privacy-enhanced embed domain.

## Checks

```bash
npm run build
npx sanity schema validate
```
