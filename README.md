# Brain Challenge - Stream 1 - Front End Development

Brain Challenge is my Stream 1 project for my full stack web developer training with the [Code Institute](https://www.codeinstitute.net/).  

## Deployment 

See deployment at [https://frankmullen.github.io/brain-challenge](https://frankmullen.github.io/brain-challenge)

## About 

Brain Challenge is a single-page application containing 3 games - a 'Simple Simon' style memory game, an anagram solver, and a pegboard-like pieces swap game. My rationale was to push myself as hard as I could to learn lots of Javascript to code the game logic.

The application was built using the following technologies:

- HTML
- CSS
- Javascript
- Bootstrap
- Flexbox
- AngularJS

## Design:

I created the design myself, keeping it very simple. I found a picture for the Jumbotron on the front page, and then repeated those colours through the site.

The only problem I had with the colour was getting the boxes in the MemoryBox game to flash sufficiently brightly. In the end I went with an initial opacity of 0.5, and 1 when the boxes are clicked to make them flash.

## Game Logic:

The hardest part of the whole project was making the boxes in MemoryBox flash in sequence. I finally got this to work using the setFlashInterval function in memory.js.

In the Conundrum game, the most difficult part was the timing, and I also had to be careful not to allow a second click on the 'Reveal Conundrum' button to reset the clock. I also encountered the issue that scrambling the word could technically put the letters back in the same order and give the same word, although the likelihood is millions to one. I got over this by having the scramble function run again if the same word is produced.

The BoardSwap game was straightforward, but it's the most limited of the three games.

## Problems Encountered:

The one aspect of the code I didn't complete was to have the content of the instructions modals injected depending which game was being viewed. The best I could do with my knowledge of AngularJS was to create 3 separate modals. I asked for advice on how to do this in the Code Institute chat room, and Yoni Lavi, Head of Mentoring kindly forked the project and completed the task for me. Yoni's code is [here](https://github.com/yoniLavi/brain-challenge), but has not yet been incorporated into my project.
