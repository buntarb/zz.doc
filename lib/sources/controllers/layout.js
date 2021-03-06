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

goog.provide( 'zz.doc.controllers.Layout' );

goog.require( 'goog.dom' );
goog.require( 'goog.dom.pattern' );

goog.require( 'zz.doc.views.Layout' );
goog.require( 'zz.doc.models.Layout' );

goog.require( 'zz.app.controllers.FEBaseLayout' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.environment.services.Environment' );
goog.require( 'zz.environment.enums.EventType' );
goog.require( 'zz.controllers.enums.EventType' );

/**
 * Layout controller.
 * @param opt_dom
 * @constructor
 * @extends {zz.app.controllers.FEBaseLayout}
 */
zz.doc.controllers.Layout = function( opt_dom ){

    var model = new zz.doc.models.Layout( );
    var view = zz.doc.views.Layout.getInstance( );

    goog.base( this, model, view, opt_dom );
};

goog.inherits( zz.doc.controllers.Layout, zz.app.controllers.FEBaseLayout );

/**
 *  @override
 */
zz.doc.controllers.Layout.prototype.setupListenersInternal = function( ){


};

/**
 *  @override
 */
zz.doc.controllers.Layout.prototype.setupModelInternal = function( ){

    this.getModel( ).createLast( [ undefined, undefined, true ] );
};

