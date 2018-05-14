var APP_ID = '16E7A470-CA4B-E968-FF01-67A48410EC00';
var API_KEY = '14A9D809-79E7-8449-FF88-38C6614DDE00';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

Backendless.Data.of( "TestTable" ).save( { foo:"FIGHTER_BRUH" } )
    .then( function( obj ) {
        console.log( "object saved. objectId " + obj.objectId )
    } )
    .catch( function( error ) {
        console.log( "got error - " + error )
    })

Backendless.Data.of( "TestTable" ).save( { meSo:"Hornly" } )
    .then( function( obj ) {
        console.log( "object saved. objectId " + obj.objectId )
    } )
    .catch( function( error ) {
        console.log( "got error - " + error )
    })
                    
