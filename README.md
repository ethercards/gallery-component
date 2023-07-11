# DEV
Primary terminal run this command:
yarn build-watch

Second terminal run the following commands:
cd playgorund
yarn start


# DEPLOY
From the root folder!
increase version number in  package.json!
yarn build
commit&push to git

# LOCAL TEST 
Create a project named "playground" in the root directory.
Inside the "playground" folder, add a file named ".gitignore" and include the "*" character in it.
In the "package.json" file of the test project, add the following line to the dependencies section: "gallery-component": "link:..".
Navigate to the "playground" folder using the command prompt or terminal.
Run the command `yarn` to install the project dependencies.
Finally, execute `yarn start` to start the project.

# PROPS 
`apiBaseUrl`: The link of the metadata API server. It is used to filter and fetch the data.

`openseaUrl`: The URL for Opensea, used to display icons and enable navigation.

`etherscanUrl`: The URL for Etherscan, used to display icons and enable navigation.

`handleCardClick`: A function that runs when a card is clicked.

`headerStyle`: The style of the header component.

`cardArray`: An array of data used to display the cards. Either cardArray or apiBaseUrl is mandatory.

`displayTraits`: A boolean value to determine whether traits should be displayed on the cards. The default value is false.

`displayFilters`: A boolean value to determine whether the filters header should be displayed. The default value is true.

`displaySelectedFilter`: A boolean value to determine whether the selected filters should be displayed in bubbles or another visual representation.

`handleOwnerClick`: A function that returns the owner's address if the owner is displayed.

`scrollCallback`: A callback function called when the user scrolls in the explore section.

`done`: A boolean value. When true, it indicates that no more calls to the scrollCallback function should be made.

`isMarketplace`: A boolean value. When true, it indicates that prices should be displayed on the cards.

`erc777Symbol`: A string representing the symbol for an ERC777 token (e.g., "Dust").

`chainDefaultToken`: A string representing the default token symbol for the blockchain (e.g., "ETH", "MATIC").
