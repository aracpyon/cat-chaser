# Cat Chaser

## Background and Overview 
**Cat Chaser** is an interative game in which user becomes a mouse and avoids getting caught by cats and their paws. 

## Functionality and MVPs
In **Cat Chaser**, 
 - [ ] User navigates ``Mouse`` by handling their mouse to avoid ``Cat``'s legs and faces.
 - [ ] ``Mouse`` can jump if user clicks the mouse
 - [ ] ``Cat``'s paws fall from sky randomly
 - [ ] ``Cat``'s face appears from the ground randomly
 - [ ] The game continues until ``Mouse`` hits one of ``Cats`` or their legs
 - [ ] The game keeps generating ``Cats`` until the game is over
 - [ ] The speed gets faster as the play duration gets longer
 
In addition(as a bonus), user has an option to be a cat to chase after mouse. 
  - [ ] User clicks the mouse to catch the mouse.
  - [ ] As User clicks, the cat puts her paw on the clicked spot. 
  - [ ] it the cat catches mouse, the user wins.

## Wireframes 
### splash
![splash](https://user-images.githubusercontent.com/56740477/75640956-b5539600-5c04-11ea-87e4-1e25b3302853.PNG)
- Hand-drawn theme of opening. 
- Some animation on title and cat's ears and hand
- start button glitters like neo sign

### play
![idea_sketch](https://user-images.githubusercontent.com/56740477/75639399-905c2480-5bfe-11ea-8f79-7daf409c2839.PNG)
- 3D game
- ThreeJS

## File Structure
### root directory
* /dist 
  * …
* /src
  * …
* Index.html
* .gitignore
* node_modules
* package.json
* package.lock.json
* postcss.config.js
* README.md
* webpack.common.js
* webpack.dev.js
* webpack.prod.js

### src
* /assets
  * cat_image.svg
  * BGM.mp3
* index.js
* /js
 * [...]
* /scss
 * [...]

## Architecture and Technology 
* Three.js
  * -- Use for background and basic shapes of ``Mouse`` and ``Cats``
  * -- ``Mouse`` shape 
* canvas HTML
  * -- detailed designs on ``Cat``
  * -- Look for a way to apply PNG or SVG on ``Cat``'s face


## Implementation Timeline 
* -- create a repo March 1, 2020
* -- starts Mar 2, 2020
  * Finish Three.js tutorial for the basic set up
  * Construct basic shapes of moving elements with Three.js(for now, just cubes)
  * Start a game logic
    * -- Moving ``Mouse`` with mouse navigation
    * -- Juming ``Mouse`` when mouse is clicked
    * -- ``Cat``'s paws falling from sky
    * -- ``Cat``'s faces move up from the ground
    * -- Gameover when ``Mouse`` hits other objects(``Cat``)
    * -- Game speed slowly increases as the game proceeds
* -- March 3, 2020
  * build a game logic
* -- March 4, 2020
  * Start working on visual apsects of the game
* -- March 5, 2020
  * Find bugs

