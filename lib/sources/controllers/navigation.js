// Copyright 2016 Artem Lytvynov <buntarb@gmail.com>. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @license Apache-2.0
 * @copyright Artem Lytvynov <buntarb@gmail.com>
 */

goog.provide( 'zz.doc.controllers.Navigation' );

goog.require( 'goog.dom' );
goog.require( 'goog.array' );

goog.require( 'zz.doc.services.GetData' );

goog.require( 'zz.doc.views.Navigation' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.environment.services.MVCTree' );
goog.require( 'zz.environment.services.Environment' );


/**
 * Navigation controller.
 * @param {zz.doc.models.Navigation} model
 * @param {zz.doc.views.Navigation} view
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
zz.doc.controllers.Navigation = function( model, view, opt_dom ){

    this.router_ = zz.environment.services.Environment.getInstance( )

        .getRootController( )
        .getRouter( );
    goog.base( this, model, view, opt_dom );
};

goog.inherits( zz.doc.controllers.Navigation, zz.controllers.FEBase );
zz.environment.services.MVCTree.registry.setController( 'navigation', zz.doc.controllers.Navigation );

/**
 *  @override
 */
zz.doc.controllers.Navigation.prototype.setupListenersInternal = function( ){

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.ACTION,
        this.actionHandler_,
        false
    );

    this.getHandler( ).listenWithScope(

        this.router_,
        zz.environment.enums.EventType.ROUTED,
        this.routeChangedHandler_,
        false,
        this
    );
};

/**
 *  @override
 */
zz.doc.controllers.Navigation.prototype.setupModelInternal = function( ){

    this.getModel( ).createLast( [

        'test'
    ] );

    zz.doc.services.GetData.getInstance( ).getDataFromSrv( );
    this.routeChangedHandler_( );

};

/**
 * Action event handler.
 * @param {zz.controllers.events.Action} e
 * @private
 */
zz.doc.controllers.Navigation.prototype.actionHandler_ = function( e ){


    e.stopPropagation( );
};

/**
 * Route changed handler.
 * @param {zz.environment.events.Routed=} opt_e
 * @private
 */
zz.doc.controllers.Navigation.prototype.routeChangedHandler_ = function( opt_e ){

    var route;
    if( opt_e ){

        route = opt_e.getCurrFragment( );

    }else{

        route = this.router_.getFragment( );
    }

    this.markSelectedFolder_( 'test');
};

/**
 * Mark selected folder.
 * @param {string} folderTitle
 * @private
 */
zz.doc.controllers.Navigation.prototype.markSelectedFolder_ = function( folderTitle ){

    var model = this.getModel( );
    var loop = true;

    if( model.firstDatarow( ) ){

        model.currentDatarow( ).selected = false;
        while( model.nextDatarow( ) ){

            model.currentDatarow( ).selected = false;
        }
    }

    if( model.firstDatarow( ) ){

        while( loop ){

            if( model.currentDatarow( ).name === folderTitle ){

                model.currentDatarow( ).selected = true;
                loop = false;

            }else{

                model.nextDatarow( );
            }
        }
    }
};