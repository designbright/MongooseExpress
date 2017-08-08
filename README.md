Learning Mongoose
The Iron Yard Class Assignment: August 2017
  Part I: Build a Mongoose Schema
  Part II: Build a Collection Manager

Learn more about Mongoose Schemas here:
http://mongoosejs.com/docs/guide.html

Part I
Build a Mongoose Schema for a Collection of Items
  A schema defines the shape of your data to be stored in MongoDB, along with rules about that data.Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

Do you have something you are passionate about and collect?

Maybe you collect:

Seashells?
Comic books?
Postcards?
Antique doll outfits?
Masks?
Gargoyles?

Pick an item either you collect or that you have heard of people collecting. Build a Mongoose schema for this item.

Your schema must have:

At least one non-string field
An array
At least one nested object (can be in array)

Part II: BUILD A COLLECTION Manager

  Using Mongoose, build an app to store information about a collection.

  Using your schema from Part I, build an Express app that lets you do the following:

    View your collection
    Add to your collection
    Edit items in your collection
    Delete items from your collection.

When dealing with arrays, think about how you might make this user interface work. If it makes sense, write some client-side JavaScript to help add new items to your array on your create and update item pages. You can make your JavaScript available with express.static.

PROCESS
1. Sketch page layout to help you determine how to setup files and create a roadmap for the steps you need to take to complete project
2. Setup Files in Atom (see FILE SETUP below)
3. Install node packages via terminal
    npm init
    npm install <packagename> --Save
      express
      express-handlebars
      bodyParser
      routes
      mongoose
      bluebird
      router-express
4. In terminal, create new database in MongoDB
    I named my MongoDB database "MongooseDB"
5. Setup handlebars files referencing sketches you created in previous steps (see FILE SETUP)
6. Setup index.js file (see FILE SETUP)
7. Create Schema in models/contact.js file
  The schema you create will automatically create a new "collection" in Mongo. Reference your Schema by using handlebars file
8. Setup routes.js file
***************************
When you type node index.js in terminal, you should see the message "routes.js file ready" and "ready to roll"
You will not see anything on the localhost:3000 browser until you set all of these files up.


FILE SETUP
  PROJECT FOLDER/DIRECTORY
  "MongooseExpress"
==============================================================
    MODELS FOLDER
      contact.js File
        In contact.js you will:
          require mongoose
          Create a reference to Schema
          Create a Schema for a contact
          Create a model for a contact
          export Contact module
    =======================================================      
    PUBLIC FOLDER
      style.css
    ========================================================
    ROUTES FOLDER
      routes.js
        In contact.js you will:
          require express
          Connect Routes to express
          Define Contact file ("../models/contact");
          Get/Render routes for all of your handlebars files
          Export route module
    ======================================================      
    VIEWS FOLDER  
      LAYOUTS FOLDER  
        main.handlebars
          The main.handlebars file will be your "home page" where links to other pages will be kept

      contactForm.handlebars
        The contactForm is where you will:
          Create an HTML form that prompts users to enter their contact info
          User will "Save Contact" info that will show up main.handlebars aka "Home Page"

      listContacts.handlebars
        In the listContacts.handlebars file you will:
          Create a table that is displayed on the main.handlebars aka "Home Page"
  ===========================================================
  index.js file
    In index.js file you will:
      Require packages
      Create express app
      Tell express to use handlebars
      Tell express to use bodyParser middleware to parse form data
      Tell Express to use routes
      Connect to Mongo via Mongoose
  ===============================================
  README.md
# MongooseExpress
