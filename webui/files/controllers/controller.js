'use strict';

exports.showLoginPage =   ( req, res ) => {
    res.render( 'displayLoginPage');
};
  
exports.showDashboard = ( req, res ) => {
    res.render( 'displayDashboard' );
};

exports.showGameSession = ( req, res ) => {
    res.render( 'displayGameSession' );
};

exports.showAccountCreationPage = ( req, res ) => {
    res.render( 'displayAccountCreationPage' );
};

exports.showIndex =  ( req, res ) => {
    res.render( 'index');
};