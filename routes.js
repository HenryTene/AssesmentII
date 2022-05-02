//import endpoints (api)
const note = require("./api/note");

//define routes
function routes(app) {
  app.use("/api/notes", note);
  
//app.use("/api/users", user);
}

module.exports = routes;
 