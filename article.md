*This is the second part of an ongoing series looking at building a custom documentation portal from scratch, that uses the Swagger open source tools as well as our professional platform - Swaggerhub. If you haven't taken a look at the first part on setup and building the initial framework, it can be found HERE - or the repository with the completed code is available HERE.*

In the first part of this series, we focused on the environment and tools that would be used in creating the custom portal, as well as building out the initial components to both acquire and render the documentation dynamically. Now that we have that base layer built - we can start to look at customizing this portal to really make it our own.

There are many ways that we could approach doing this, such as loading in CSS libraries and frameworks to layer on top of our base stylesheets. Another option would be creating a custom template we could pass against the SwaggerUI component (instead of the current 'baseLayout') to really change the page layout as well as its style, which is something we will explore in another article. For our initial use case, we will just explore some of the major components and classes that we should be tweaking to start to make the documentation look a little less 'cookie cutter'.

# SETUP

For our demo site, we are imagining that an infamous Galactic Empire is going through a digital transformation - one that will hopefully take the galaxy by storm and help with their upcoming expansion goals. As different teams and groups within the larger organization peel away from the traditional monolith and begin to expose internal services, there is a need to make the documentation for all of these accessible in a single location, and from a style perspective to match with the overall branding and 'feel' of the Galactic Empire.

Currently, we are using the base style for the SwaggerUI component on a bright white background, which is serviceable but a little to bright with the overall look and feel of the organization. We also don't have any imagery or logo's included to act as a visual aid for our brand. Luckily, we were provided a color palette to work from that will make the task a little easier.

[image of style guide?]
[http://www.fubiz.net/wp-content/uploads/2015/04/The-Colors-of-Star-Wars-Palettes-3.jpg]

Over the next few steps, we will build out a darker color scheme for the site and update our sidebar header to include custom fonts, a logo and sub-header.

# UPDATING THE PAGE STYLE

The first thing we should look at is the structure of our current style sheets - based on what we built in the previous tutorial, we know we can start to update base components like the page body and sidebar, while the central 'documentation' pane will have to be updated based on the existing names and structure of the SwaggerUI component..

[image of current look]

[current css components we care about]

Lets look at updating the sidebar to align with our final vision. This should be pretty straightforward, as we have a single sidebar body class `side-bar` and the links share a common class name `api-link`. Currently, these all live under the same `App.css` file which worked fine for our initial setup, but to make things manageable lets create a css folder, and a new file `side-bar.css` that will contain the specific classes. We can go ahead and move all the other CSS files except for `index.css` which is required by create-react-app that we leant on for our initial setup.

# UPDATING THE HEADER
 - add custom font
 - add image
 - add subhead

# UPDATING THE DOCUMENTATION STYLE