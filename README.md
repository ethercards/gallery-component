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