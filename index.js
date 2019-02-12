/*console.log("before")
alert("index.js")
console.log("after")*/

var message;
message = "hello, var";
console.log(message);

var user = "john", password = "doe";
console.log(user, password)


var admin, name
name = "vasya"
admin = name
console.log("admin:", admin)

var earth = "zemlya"
var name = "petya"

console.log( 0 / 0 )
console.log( 1 / 0 )
console.log( "--1" * 4 )


console.log( typeof("-1") )
console.log( typeof("--1") )
console.log( typeof(-1) )
console.log( typeof( false ) )
console.log( typeof( null ) )
console.log( typeof( undefined ) )

var x;
console.log( "typeof(x):", typeof( x ) )

var user = { name: ( Vasya = "vasya" ) }
console.log( user )
console.log( typeof( user ) )
console.log( typeof function x(){} )