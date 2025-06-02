const fs = require("fs");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const SITE_URL = "https://www.puritualofficial.com";
const WC_URL = "https://moccasin-chinchilla-599653.hostingersite.com";
const WC_CONSUMER_KEY = "ck_6567880a557e19353440fa8ec3626f660cd54de9";
const WC_CONSUMER_SECRET = "cs_4805d16670432b5c69983dd8c16fb5f3fe4f1927";
const WC_VERSION = "wc/v3";

const WooCommerce = new WooCommerceRestApi({
  url: WC_URL,
  consumerKey: WC_CONSUMER_KEY,
  consumerSecret: WC_CONSUMER_SECRET,
  version: WC_VERSION,
});

async function generateSitemap() {
  const response = await WooCommerce.get("products", {
    per_page: 100,
  });
  const products = response?.data;

  const blogResponse = await fetch(`${WC_URL}/wp-json/wp/v2/posts`);
  const posts = await blogResponse.json();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${SITE_URL}/</loc>
      </url>
      <url>
          <loc>${SITE_URL}/about-us</loc>
      </url>
      <url>
          <loc>${SITE_URL}/contact-us</loc>
      </url>
      <url>
          <loc>${SITE_URL}/faqs</loc>
      </url>
      <url>
          <loc>${SITE_URL}/blogs</loc>
      </url>
      ${posts
        ?.map(
          (item) => `
        <url>
          <loc>${SITE_URL}/blogs/${item.slug}</loc>
        </url>
      `
        )
        .join("")}
      ${products
        ?.map(
          (item) => `
        <url>
          <loc>${SITE_URL}/product/${item.slug}</loc>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
