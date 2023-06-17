const express = require('express') 
const app = express()
const mongoose = require("mongoose")
const {MONGO_DB_CONFIG} = require("./config/app.config");
const cors = require("cors")



mongoose.connect(MONGO_DB_CONFIG.DB, 
      {
        useNewUrlParser: true, 
      useUnifiedTopology: true,
      }).then(() => {
        console.log('MongoDB connection successful!')
      }).catch((error) => {
        console.log('MongoDB connection fail!:', error)
      });

      app.use(cors());

      app.use(express.json());

      app.use("/api", require("./router/app.route"));

      app.listen(8000, () => {
        console.log("server running on port 8000");
      });



