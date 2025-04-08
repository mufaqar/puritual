const fs = require("fs");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const SITE_URL = "https://www.puritualofficial.com";
const WC_URL = "http://demo.mufaqar.com"
const WC_CONSUMER_KEY = "ck_d23a1b069cf818d0694f99c965c2850342452b20"
const WC_CONSUMER_SECRET = "cs_bc599f216a2a5c9f9ea9783cc60b2ad6a2c47e4a"
const WC_VERSION = "wc/v3"

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
    const products = response?.data

    const blogResponse = await fetch(`${WC_URL}/wp-json/wp/v2/posts`)
    const posts = await blogResponse.json()

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
      ${posts?.map((item) => `
        <url>
          <loc>${SITE_URL}/blogs/${item.slug}</loc>
        </url>
      `).join("")}
      ${products?.map((item) => `
        <url>
          <loc>${SITE_URL}/product/${item.slug}</loc>
        </url>
      `).join("")}
    </urlset>
  `;
    fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();