# Live Gaming App

## About the app:

A simple lightweight SPA to help keep track of news and releases for Live Games of all platforms and genres, including a feature to search specific games.<br>
The app pulls information from the API from https://www.mmobomb.com/api .

## Installation:
1. Clone Repositary<br>
Clone the repository found under the green Code button.<br>
In VSCode gitBash terminal: git clone https://github.com/jimmybookkyh-crypto/FE25Projekt.git

2. Install the dependencies:<br>
Navigate to the root folder in the termnibal and install dependencies by typing: npm install

3. Start up the development server:<br>
To run the app start devolopment server by typing: npm run dev

4. Running the app in browser:<br>
Access the application by copying the localhost url http://localhost:5173/search into browser or ctrl+click on the address in the terminal.


## Technical choices - reflection

1. Folder and file structure<br>
Organized with use of subfolders to keep it clean and well-structured for easy readability and scalability.<br>
For example in the app root folder I kept only the essential files such as main.jsx and appp.jsx while pages of the application such as Home or About where moved into the /pages subfolder, any components such as Navigation.jsx or Header.jsx are found under the /componentes with subfolders if it consists of 2 or more files (such as accompying .css file).

2. Routing Setup<br>
The routing is structured to ensure a consistent layout across all pages, such as shared navigation and styling, with focus on a good overview and making the routing easier to maintain and easy extend if the application grows.<br>
Nested routes have been used to group related pages under the main layout, and for example I've also made use of nested routes with News being displayed by default while on the Home page.<br>
There is also a fallback route to handle undefined paths to improve the user experience.

3. Component division<br>
The application is divided into smaller reusable components to improve readability, maintainability, and reusability.<br>
I've tried to break out as much as I could from individual the jsx files and then divided up components after their usage, aiming to keep each part small and make it easy to see which responsibility each component has.<br>

4. Props-solution<br>
My main usage of a props solution is with the Contentbox component which uses both 'title' and 'children'props in order to make it more flexible as a resuable function.<br>
The 'title' prop allows the component to optionally display a heading only when needed, while the 'children' prop prop lets any content be pulled into the box for rendering which keeps the component reusable and generic.<br>
