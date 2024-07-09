const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({ status:200,message: 'API' });
}  );


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
} );