function postToIndexNow(urlList) {
    const data = JSON.stringify({
      host,
      key,
      keyLocation,
      urlList
    });
  
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
      }
    };
  
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseData = '';
        res.on('data', (chunk) => {
          responseData += chunk;
        });
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            data: responseData
          });
        });
      });
  
      req.on('error', (error) => {
        reject(error);
      });
  
      req.write(data);
      req.end();
    });
  }