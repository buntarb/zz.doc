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

goog.provide( 'zz.doc.views.Layout' );

goog.require( 'goog.dom' );

goog.require( 'zz.views.FEBase' );
goog.require( 'zz.doc.templates.layout' );
goog.require( 'zz.environment.services.MVCTree' );
/**
 * Layout view.
 * @constructor
 */
zz.doc.views.Layout = function( ){

    goog.base( this, zz.doc.templates.layout.default );
};
goog.inherits( zz.doc.views.Layout, zz.views.FEBase );
goog.addSingletonGetter( zz.doc.views.Layout );
zz.environment.services.MVCTree.registry.setView( 'layout', zz.doc.views.Layout );