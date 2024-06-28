const express = require('express');
const app = express();
const port = 4141;

app.use(express.json())

const pokeUtilRoute = require('./routers/poke-util-router');
app.use('/poke', pokeUtilRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
