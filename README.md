# Welcome to Arcane Encyclopedia

This is a tool for people playing Magic: the Gathering, a collectable card game. There are tens of thousands of Magic cards, although generally players agree to play against each other only using a subset of all the cards, referred to as a 'format'. Formats can be pretty big though, with Standard, the most popular format, currently containing 1,880 cards. 

This tool is designed to narrow down that 1,880 into a more manageable number so the user can predict what their opponent might do, given given how much mana (the game resource used to play cards) is available to the opponent. In particular, only certain cards, referred to as 'tricks' can be played at *instant speed*, which means, among other things, that your opponent can play that card against you on your turn. 


## Let's get started!
![main app screen](/server/public/images/landing.png)

This is the screen you will see when you start the app or visit it at www.arcane-encyclopedia.herokuapp.com. 

You can select the format using the dropdown menu at the top left:

![format selector](/server/public/images/format.png)

Click on your preferred format (at the moment I have those formats supported by the MTG:Arena computer game), and click 'Get Cards' to load the cards into the app. The cards are obtained from the API at https://scryfall.com, and its servers provide the cards in batches of 175 at a time, so they won't all load straight away. The app takes all cars available in an entire format and then all processing is done client-side, so once the cards have loaded up, everything else loads pretty quickly. As soon as any cards are loaded, the screen will display how many it has. 

If you select a new format and click 'Get Cards', the existing cards will be cleared before loading the new ones. You can clear all cards by clicking 'Clear Cards'. 

## I can't see any cards!

Once the cards are loaded into the app, you still need to specify how much mana your opponent has to cast them. Take a look at the mana selector on the right side:

![format selector](/server/public/images/mana.png)

The grey circles are buttons, click to add or remove mana, which comes in five colours, and also colourless at the bottom. You can clear all mana with the button below the mana selectors. 

## How do I use this information?

Once your opponent gets a reasonable amount of mana, there are still a lot of cards they might play. Fortunately, we can sort them to get a better idea of what they are likely to. To the right of the format selector is a sort selector. Cards are sorted alphabetically by default, but we can sort them other ways.  

![sort selector](/server/public/images/sorts.png)

For Standard (or any Constructed format), sorting by price gives a pretty good idea of the likelihood your opponent will use it against you (the more played cards are in higher demand and thus people pay higher prices for them). For Limited formats, the number of cards is pretty small, but CMC sort will give you an idea of the cheap cards available to your opponent, and if you filter for instant speed tricks the number becomes pretty manageable.

## Filter for instants? How do I do that?

It's built into the app. Click the checkbox labelled 'Only show tricks' and the cards will automatically be filtered for cards which either have the type 'instant' or contain the oracle text 'flash', which is Magicese for tricks. 

The other built in filter removes lands, and is on by default. Uncheck it you want to see what utility and basic lands are available in the format. Since all lands cost no mana, they will show up no matter how much mana you select. 

## My opponent has 3 different dual lands, what mana do I put in?

This was a tricky one. In trying to solve it, I came up with a way of filtering the cards on a variety of criteria. Below the format selector is a custom filter bar. Try clicking the 'Add filter' button, and you'll see something like this:

![sort selector](/server/public/images/filters.png)

To see what spells can be cast when your opponent has lots of type of mana available, just put it all in, so if they have a white and blue dual, a black and blue dual and a black and white dual, add two mana each of white, blue and black to the mana selector. Then add a filter and choose 'CMC less than' and put 4 in the text field. This will show every card of three mana or less castable in those combinations of colors. 

You can use the filters for other things as well. If you're playing against a tribal deck you could put the type into a filter for 'type line contains' to see what creatures they might cast, or 'oracle text contains' if you want to see what spells and creatures care about that type. If you want to know what board wipes your opponent can cast, try an oracle text search for 'all creatures'. You can add as many filters as you like, although they will start to clog the screen if you add too many. The filters combine additively, not alternatively: putting in two type line filters for 'artifact' and 'creature' will only return cards which are both artifacts and creatures. 

## What's next?

I'm pretty happy with the app as is, but behind the scenes I want to refactor some of the functions and write some more tests. As well as this, I want to add a selector for mana of any colour, a sort for rarity, and support for cards with hybrid mana costs, in time for the upcoming Ravnica set. 

## Who else contributed to this?

I started from a boilerplate created by my coding school, Enspiral Dev Academy. Mana symbols were created by Andrew Gioia and can be found at github.com/andrewgioia/Mana. The card data was created by Scryfall, and of course all intellectual property outside of the code itself is owned by Magic's creators, Wizards of the Coast. 

