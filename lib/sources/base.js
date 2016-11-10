/**
 * @fileoverview Provide zz.doc base object.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.doc' );

goog.require( 'zz.doc.config' );

goog.require( 'zz.doc.controllers.Application' );
goog.require( 'zz.doc.views.Application' );
goog.require( 'zz.doc.models.Application' );

/**
 * Base namespace for zz.doc module.
 * @const
 */
zz.doc = zz.doc || { };

/**
 * Bootstrap module method.
 */
zz.doc.bootstrap = function( ){

    /**
     * Application model.
     * @type {zz.doc.models.Application}
     */
    var appModel = new zz.doc.models.Application( undefined, [ [ 'imazzine dev team', 'zz.doc' ] ] );

    /**
     * Application view.
     * @type {zz.doc.views.Application}
     */
    var appView = new zz.doc.views.Application( );
    window[ 'controller' ] = new zz.doc.controllers.Application( appModel, appView );

    zz.doc.config( );
};

goog.exportSymbol( 'zz.doc.bootstrap', zz.doc.bootstrap );