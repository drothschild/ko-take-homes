# David Rothschild Take Home Assignment

## Initial Assupmtions


## Technical Stack

To the React and JSON, I added Redux, since there needed to be data flow from the Filters to the Results. It's arguably overkill for a project of this size

I used the Airbnb config for the grammar and cofiguration.

I could not ultimately link to Rotten Tomatoes with the OMDB data, which no longer include that URL. I decided to instead link to the URL

For formatting I used Prettier, which installed as a developer package, and can be run from the command line as "npm run format". I mostly kept with the style used in the original(as I said, I wanted to hew as close as possible to the earlier design,) though some jsx text was flattened into one line.

I used the original directory structure, though it's not what I would use on my own. It's harder to indentify individual index.js files in the text editor, and it adds more complexity to a simple project.

Finally, there is a small error in movieData.json. The release year for 'Ex-Machina' is 2014, not 2015. Because of that, the OMDB returns data for "SXSW Q&A with Cast and Crew of 'Ex Machina.' Arguably, there should be a check to see if the returned movie title matches the given title, but I didn't want to go beyond the scope of the project.
