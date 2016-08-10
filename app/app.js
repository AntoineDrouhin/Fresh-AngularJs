'use strict';

angular.module('MyApp',[
    'ui.router',
    'ui.bootstrap'
])
    .constant('WEBAPP_CONFIG', {
        // connexion_params: {
        //     client_id: '0DDA0sXfGG3GyTyciIZH7E5Ze2lAyl2R==',
        //     client_secret: '0DDA0sXfGG3GyTyciIZH7E5Ze2lAyl2R',
        //     grant_type: 'password'
        // },
//        api_route : 'http://localhost:3000',
        uri_pagea : '/pagea',
        uri_pageb : '/pageb'
    });