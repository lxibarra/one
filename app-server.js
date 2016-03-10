/**
 * Vendor dependencies
 */
import React from 'react';
import { match, RoutingContext } from 'react-router';
import ReactDomServer from 'react-dom/server';
import express from 'express';
import hogan from 'hogan-express';

/**
*App code
*/
import routes from './routes';
const app = express();
app.engine('html', hogan);
app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname + '/public'));
app.set('port', (process.env.PORT||3000))

app.get('*', (req, res)=> {
    match({ routes,  location: req.url }, (error, redirectLocation, renderProps) => {
        const reactMarkup = ReactDomServer.renderToStaticMarkup(
          <RoutingContext {...renderProps } />
        )
        res.locals.reactMarkup = reactMarkup;

        if(error) {
          res.status(500).send(error.message);
        } else if(redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if(renderProps) {
          res.status(200).render('index.html');
        } else {
          res.status(404).send('sorry 404');
        }
    })
});

app.listen(app.get('port'), function() {
    console.log('Server up, ready and listening on port', app.get('port'));
});
