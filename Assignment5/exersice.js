const express = require('express');
const axios = require('axios');
const app = express();

app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('trust proxy', true);
app.set('x-powered-by', false);

app.get('/user', (req, res) => {
    axios.get("https://randomuser.me/api/?results=10")
        .then((response) => {
            res.set({
                'Cache-control': 'private, max-age=86400',
                'Last-Modified': new Date(),
                'Link': `<https://randomuser.me/api/?page=1&results=10>; rel="first",` +
                    `<https://randomuser.me/api/?page=${response.data.info.page + 1}&results=10&seed=${response.data.info.seed}>; rel="next",` +
                    `<https://randomuser.me/api/?page=${response.data.info.page - 1}&results=10&seed=${response.data.info.seed}>; rel="prev"`
            });
            console.log(response.data);
            res.json(response.data);
        })
        .catch(err => console.log(err));

    // res.end("test");
});

app.listen(3000, () => console.log("Server listening port 3000"));