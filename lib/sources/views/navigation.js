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

goog.provide( 'zz.doc.views.Navigation' );

goog.require( 'zz.views.FEBase' );
goog.require( 'zz.doc.templates.navigation' );
goog.require( 'zz.environment.services.MVCTree' );
/**
 * Navigation view.
 * @constructor
 */
zz.doc.views.Navigation = function( ){

    goog.base( this, zz.doc.templates.navigation.default );
};
goog.inherits( zz.doc.views.Navigation, zz.views.FEBase );
goog.addSingletonGetter( zz.doc.views.Navigation );
zz.environment.services.MVCTree.registry.setView( 'navigation', zz.doc.views.Navigation );