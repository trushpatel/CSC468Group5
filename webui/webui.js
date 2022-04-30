const express = require('express'),
      layouts = require( 'express-ejs-layouts' ),
      controller = require('./files/controllers/controller'),
      app = express();

app.use(
  express.urlencoded({
      extended: false
      })
);

app.use(express.json());
app.set( 'port', 80 );
app.set( 'view engine', 'ejs' );
app.set('views', './files/views');
app.use( layouts );
app.use( express.static( 'public' ) );

app.get( '/', function( req, res )  {
  res.render( 'index' );
} );

app.get( '/displayLoginPage', controller.showLoginPage );

app.get( '/displayAccountCreationPage', controller.showAccountCreationPage );

app.get( '/displayIndex', controller.showIndex );

app.get( '/displayDashboard', controller.showDashboard );

app.get( '/displayGameSession', controller.showGameSession );

app.use(express.static('files'));

const server = app.listen(80, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
