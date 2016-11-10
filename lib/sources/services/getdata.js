/**
 * @fileoverview Service for client api methods.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.doc.services.GetData' );

goog.require( 'goog.net.XhrIo' );
goog.require( 'goog.array' );
goog.require( 'goog.object' );
goog.require( 'goog.json' );

goog.require( 'zz.services.BaseService' );

/**
 * Service for client api methods.
 * @constructor
 */
zz.doc.services.GetData = function( ){

    goog.base( this, 'GetData' );
};

goog.inherits( zz.doc.services.GetData, zz.services.BaseService );
goog.addSingletonGetter( zz.doc.services.GetData );

/**
 * Get documentation data from server.
 * @return {goog.Promise} data
 */
zz.doc.services.GetData.prototype.getDataFromSrv = function( ){

    var self = this;
    return ( new goog.Promise( function( resolve, reject ){

        goog.net.XhrIo.send( 'lib/sources/docs/queue.json', function( ){

            self.srvData_ = this.getResponseJson( );

            console.log( self.srvData_ );
            resolve( );

        } );

    }, this ) );
};