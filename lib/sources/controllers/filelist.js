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

goog.provide( 'zz.doc.controllers.Filelist' );

goog.require( 'goog.dom' );
goog.require( 'goog.array' );
goog.require( 'goog.json' );

goog.require( 'zz.environment.services.Environment' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.controllers.enums.EventType' );

goog.require( 'zz.doc.models.Filelist' );

goog.require( 'zz.doc.views.Filelist' );

/**
 * File list controller.
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
zz.doc.controllers.Filelist = function( opt_dom ){

    var model = new zz.doc.models.Filelist( );
    var view = zz.doc.views.Filelist.getInstance( );

    goog.base( this, model, view, opt_dom );

    this.router_ = zz.environment.services.Environment

        .getInstance( )
        .getRootController( )
        .getRouter( );
};

goog.inherits( zz.doc.controllers.Filelist, zz.controllers.FEBase );


/**
 * Setup listeners.
 */
zz.doc.controllers.Filelist.prototype.setupListenersInternal = function( ){

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.ACTION,
        this.actionHandler_,
        false
    );
};

/**
 *  @override
 */
zz.doc.controllers.Filelist.prototype.setupModelInternal = function( ){


};


/**
 * Action event handler.
 * @private
 */
zz.doc.controllers.Filelist.prototype.actionHandler_ = function( e ){


    e.stopPropagation( );
};