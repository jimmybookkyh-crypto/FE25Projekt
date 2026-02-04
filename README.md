# Live Gaming App

## About the app:

A simple lightweight SPA to help users keep track of news and releases for Live Games of all platforms and genres, including a feature to browse games by category.<br>
The application pulls information from the API at https://www.mmobomb.com/api as source of the data used for it's features.

## Installation:

1. Clone Repositary<br>
Clone the repository found under the green Code button.<br>
In VSCode gitBash terminal: git clone https://github.com/jimmybookkyh-crypto/FE25Projekt.git

2. Install the dependencies:<br>
Navigate to the root folder in the termninal(for example if starting in the \FE25Projekt then type; cd LiveGameAPP ) and install dependencies by typing: npm install

3. Start up the development server:<br>
To run the app start devolopment server by typing: npm run dev

4. Running the app in browser:<br>
Access the application by copying the localhost url http://localhost:5173/search into browser or ctrl+click on the address in the terminal.

## Requirements fullfilled
1. G<br>
* Create Singel Page Application with a clear theme - [x]<br>
2. A<br>
* React SPA with client-side routing (React Router)- [x]
* At least 3 total routes; Home(with News child route), Latest Live Game, Search Games, About - [x]
* Navigation set up trough React Router's built in NavLink - [x]
2. B<br>
* The app consists of several reusable components such as ContentBox, SearchField and Navigation etc - [x]
* At least one component receives data via props and displays it, for example used with ContentBox 'title' and 'children' props - [x]
2. C<br>
* Usage of useState for interactivity at least once, for example in the SearchGames function with 'searchTerm' useState. - [x]
2. D<br>
* The APP is fetching data from an API with a fetch trough useEffect - [x]
* Displays both a loading state as well as simple error handling  - [x]
* Retrieved data is used and displayed in the user interface - [x]
2. E<br>
* README includes short description of the app - [x]
* README includes how to start the project - [x]
* README includes what requirements have been met(checklist in bullet form) - [x]<br>
3. VG<br>
 1. 
 * Clear and organized file structure - [x]
 * "Technical choices - reflection" section in the README with at least 150 words - [x]
 2. 
 * An extra route ("About" page) - [x]
 * Extra UI functionality (pagination used on Home page) - [x]

## Technical choices - reflection

1. Folder and file structure<br>
Organized with use of subfolders to keep it clean and well-structured for easy readability and scalability.<br>
For example in the app root folder I kept only the essential files such as main.jsx and app.jsx while pages of the application such as Home or About where moved into the /pages subfolder, any components such as Navigation.jsx or Header.jsx are found under the /componentes with subfolders if it consists of 2 or more files (such as an accompanying .css file with the .jsx).

2. Routing Setup<br>
The routing is structured to ensure a consistent layout across all pages, such as shared navigation and styling, with focus on a good overview and making the routing easier to maintain and easy to extend if the application grows.<br>
Nested routes have been used to group related pages under the main layout, and for example I've also made use of nested routes with News being displayed by default while on the Home page.<br>
There is also a fallback route to handle undefined paths to improve the user experience.

3. Component division<br>
The application is divided into smaller reusable components to improve readability, maintainability, and reusability.<br>
I've tried to break out as much as I could from individual the jsx files and then divided up components after their usage, aiming to keep each part small and make it easy to see which responsibility each component has.

4. Props-solution<br>
For an example of my usage of a props solution is with the ContentBox component which uses both 'title' and 'children' props in order to make it more flexible as a reusable function.<br>
The 'title' prop allows the component to optionally display a heading only when needed, while the 'children' prop lets any content be pulled into the box for rendering which keeps the component reusable and generic with less hardcoded texts needing to be written.

5. State-solution<br>
The SearchGames component uses multiple useState hooks for managing different pieces of dynamic data independently.
An example of a state solution I've made use of for this is with the search functionality where the 'searchGame' state stores the list of games fetched from the API to render the list of games once data is loaded and keeps the raw data separate from filtered results.<br>
Meanwhile the 'searchTerm' state stores the current input value, allowing the component to react immediately to user input and update the displayed filtered version of the games list

6. Choice of API<br>
I chose my API from https://www.mmobomb.com/api based on several reasons;<br>
The API fits the theme I wanted to work with, building an application themed around gaming.<br>
It is accessible and doesn't require any registration or API keys and doesn't have any restrictions on usage.<br>
The API has several endpoints with different data in them making such as list of games and latestnews that are easy to use for various app functions, for example using an API that regularly fills with new data is more interesting to work with.<br>
It seems to be a maintained API that gets updated thus it feels more reliable to use for a project.<br>
While the documentation for it is a bit lacking, it is simple set up enough with clearly defined endpoints and logical keys to which makes it easy to use and work with.