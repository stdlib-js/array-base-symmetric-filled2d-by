/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var constantFunction = require( '@stdlib/utils-constant-function' );
var filled2dBy = require( './../lib' );

var out = filled2dBy( 2, constantFunction( 0.0 ) );
console.log( out );
// => [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]

out = filled2dBy( 2, constantFunction( 'beep' ) );
console.log( out );
// => [ [ 'beep', 'beep' ], [ 'beep', 'beep' ] ]

out = filled2dBy( 2, constantFunction( null ) );
console.log( out );
// => [ [ null, null ], [ null, null ] ]

out = filled2dBy( 2, constantFunction( true ) );
console.log( out );
// => [ [ true, true ], [ true, true ] ]

function clbk( indices ) {
	return indices[ 0 ] + indices[ 1 ];
}
out = filled2dBy( 3, clbk );
console.log( out );
// => [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ]
