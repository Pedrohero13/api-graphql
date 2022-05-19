const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphQlSchema = require("./src/schema")
const graphQlResolvers = require("./src/resolvers")
const mongoose = require("mongoose")
const cors = require('cors');

const app = express()
const corsOptions = {
  origin: "*",
  credentials: true
};

app.use(cors(corsOptions));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
)

const uri = `mongodb+srv://pedro:1234@cluster0.j2zqn.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(4000, console.log("Server is listening on 4000")))
  .catch(error => {
    throw error
  })