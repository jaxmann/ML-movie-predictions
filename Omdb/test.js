const imdb = require('imdb-api')

imdb.get('The Dark Knight', {apiKey: '3c95f10a', timeout: 30000}).then(console.log).catch(console.log);


