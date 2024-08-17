const xml2js = require('xml2js');

// Configuration
const sitemapUrl = 'https://elevenai.co/sitemap.xml'; // TODO: Update
const host = 'https://elevenai.co'; // TODO: Update
const key = '<API Key>'; // TODO: Update
const keyLocation = 'https://elevenai.co/c9606f8b11c24dfb9b3b665cc60e7020.txt'; // TODO: Update

const modifiedSinceDate = new Date(process.argv[2] || '1970-01-01');

if (isNaN(modifiedSinceDate.getTime())) {
  console.error('Invalid date provided. Please use format YYYY-MM-DD');
  process.exit(1);
}

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function parseSitemap(xmlData) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function filterUrlsByDate(sitemap, date) {
  const urls = sitemap.urlset.url;
  return urls
  .filter(url => new Date(url.lastmod[0]) > date)
  .map(url => url.loc[0]);
}


async function main() {
  try {
    const xmlData = await fetchSitemap(sitemapUrl);
    const sitemap = await parseSitemap(xmlData);
    const filteredUrls = filterUrlsByDate(sitemap, modifiedSinceDate);
    console.log(filteredUrls);

    if (filteredUrls.length > 0) {
      const response = await postToIndexNow(filteredUrls);
      console.log('IndexNow API Response:');
      console.log('Status:', response.statusCode, response.statusMessage);
      console.log('Data:', response.data);
    } else {
      console.log('No URLs modified since the specified date.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();