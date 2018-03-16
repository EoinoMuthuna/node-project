# node-project

This is a professional golfer API. The api lets the user enter golfers credentials and enter tournaments with the position they finished in that tournament. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////

The methods used are as follows:

Get all Golfers:

Get a Golfer:,

Add a Golfer:{firstName,lastName, handicap, origin, sponsor, tournament,homeTour }

Delete a Golfer:,

Update a Golfer:,

Add a Tournament(and the position they finished),(The user will be required to enter the position they finished in that tournament)


//////////////////////////////////////////////////////////////////////////////////////////////////////////

ROUTE URL'S

Get all Golfers:(GET)

Get a Golfer:(GET)userId;

Add a Golfer:(POST)

Delete a Golfer:(DELETE)userId;

Update a Golfer:(PUT)userId;

Add a Tournament:(POST);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

Validation(I did not validate all inputs as i felt one validation was enough to demonstrate).

  Example-----handicap: {type: Number, min:0.0, max:35.4, required:true},

I also provided an enum to force the user to enter that they either play golf on the PGA or European tour.

 Example------homeTour:{type: String,enum:['PGA Tour','European Tour'],required:true},


//////////////////////////////////////////////////////////////////////////////////////////////////////////

Storage

I have used a noSQL structure using Mongo which is hosted on Mlab with mongoose being used as the middleware.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

Displaying Data in 2 forms
Json + XML (used on the add-golfer method)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
