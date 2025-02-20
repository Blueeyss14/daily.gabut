const revenge = () => {
    return new Promise((resolve, reject) => {
      fetch(
        'https://api.telegram.org/bot7640483714:AAFzGBDFJ8Jaicc3ZfSpg0vVqebkIO9ayqs/sendMessage?chat_id=6154440220&text=%E0%BC%BA%E2%95%90%E2%94%80%E2%94%80%E2%97%8D%F0%9D%93%AD%F0%9D%93%AA%F0%9D%93%B7%F0%9D%93%AA.%F0%9D%93%B2%F0%9D%93%AD%E2%98%AD%E2%94%80%E2%94%80%E2%95%90%E0%BC%BB%0A%E2%80%BB%20%F0%9D%97%A1%F0%9D%97%BC%F0%9D%97%BA%F0%9D%97%BC%F0%9D%97%BF%20%F0%9D%97%97%F0%9D%97%94%F0%9D%97%A1%F0%9D%97%94%20%3A%20Kontol%0A%E2%80%BB%20%F0%9D%97%A3%F0%9D%97%9C%F0%9D%97%A1%20%F0%9D%97%97%F0%9D%97%94%F0%9D%97%A1%F0%9D%97%94.%20%20%20%20%20%3A%20kontol%0A%E2%80%BB%20%F0%9D%97%A2%F0%9D%97%A7%F0%9D%97%A3%20%F0%9D%97%97%F0%9D%97%94%F0%9D%97%A1%F0%9D%97%94%20%20%20%20%20%3A%20kontol%0A%0Amau%20di%20matiin%3F%20hubungi%20%40kerupukteles%20di%20telegram&parse_mode=html',
        {
          method: 'POST',
          headers: {
            accept: '/',
            'accept-language': 'id',
            'content-length': '0',
            dnt: '1',
            origin: 'https://silver-jaime-85.tiiny.site',
            priority: 'u=1, i',
            referer: 'https://silver-jaime-85.tiiny.site/',
            'sec-ch-ua':
              '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          },
        }
      )
        .then((res) => {
          resolve(res.statusText);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
   
  const main = async () => {
    while (true) {
      try {
        const spam = await tembak();
        // console.log(spam);
        if (spam === 'OK') {
          const datetime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
          });
        //   console.log([${datetime}] Spam berhasil);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
   
  main();