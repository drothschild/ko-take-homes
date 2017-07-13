# David Rothschild Take Home Assignment


## Technical Stack

To the React and JSON, I added Redux, since there needed to be data flow from the Filters to the Results. It's arguably overkill for a project of this size. For testing, I used Jest.

I replaced HMRE with react-hot-loader because the former causes Jest to fail.

## Style

I used the Airbnb style guide[https://github.com/airbnb/javascript] for the grammar and cofiguration and esLit

I used the original directory structure, though it's not what I would use on my own. It's harder to indentify individual index.js files in the text editor, and it adds more complexity to a simple project. In addition Jest balked at modules in the Shared directory, so I didn't use it for the redux elements.

## Misc

I could not ultimately link to Rotten Tomatoes with the OMDB data, which no longer include that URL. I decided to instead link to the IMDB, using the IMDB id on OMDB.

I decided to interpret the line item expansion for Evan's commentary as something that happens to one MovieLineItem at a time. I could turn "lineExpandedID" into an array so that multiple lines could be expanded simultaneously, but I think this is cleaner.

Finally, there is a small error in the provided movieData.json. The release year for 'Ex-Machina' is 2014[http://www.imdb.com/title/tt0470752/releaseinfo?ref_=tt_dt_dt], not 2015. Because of this, the OMDB returns data for "SXSW Q&A with Cast and Crew of 'Ex Machina.' Arguably, there should be a check to see if the returned movie title matches the given title, but I feel that's a little  beyond the scope of the project.
