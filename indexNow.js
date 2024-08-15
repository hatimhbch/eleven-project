const axios = require('axios');

const data = {
  host: "https://elevenai.co",
  key: "6579a4d9323e46008b962151beb96aaa",
  keyLocation: "https://elevenai.co/6579a4d9323e46008b962151beb96aaa.txt",
  urlList: [
    "https://elevenai.co/unleash-your-inner-artist-the-ultimate-guide-to-the-best-ai-art-generators",
    "https://elevenai.co/unleash-your-creativity-the-ultimate-guide-to-free-ai-image-generators-online"
  ]
};

axios.post('https://api.indexnow.org/indexnow', data, {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
.then(response => {
  console.log('Success:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
