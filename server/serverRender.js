/**
 * Created by maximiliano.dimito on 2/9/2017.
 */
//import {renderToString} from 'react-dom/server';
//import React from 'react';
//import { createStore} from "redux";
//import {Provider} from 'react-redux';
//import rootReducer from '../www/redux/reducers';
//import serialize from 'serialize-javascript';
//import App from '../www/app/App';



const renderFullPage = (component, store) => {

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Title</title>
                    <link href='styles.css' rel='stylesheet' type='text/css'>
        </head>
        <body style="margin:0px">
    
        <div id="app">${component}</div>
        </body>
        <script>window.__INITIAL_STATE__ = ${serialize(store,{isJson: true})}</script>
        <script src="js/bundle.js"></script>        
        </html>`
    ;
};



const serverRender = ( req, res, next) => {
    const store = createStore(rootReducer);
    //res.status(200).header("Content-Type", "text/html; charset=utf-8").end(renderFullPage(renderToString(<Provider store={store}><App/></Provider>),store.getState()));
};

module.exports = serverRender;