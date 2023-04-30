# General Instructions

1. Develop the mobile browser version of content Listing page as per the design given in the Designs section below using ReactJS with Redux for state management.

2. Use any UI component / frameworks that you think are going to help speed up development process. Extra marks for using TailwindCSS (https://tailwindcss.com/) for the UI framework.

# Design Requirements

1. App design must be as per the design given in the Designs section of this document.

2. Size/dimensions for the app are given in the ‘Redline’ section. Adapt this to mobile browser layout as necessary.

3. If something is not specified in the Redline, make a best estimate on placing and sizing based on the designs given in the Designs section.

# Functional Requirements

1. App must implement lazy loading of contents - image grid must load gradually as the user scrolls down. Data for the first page can be loaded during app load.

2. Client Side Search must be implemented via Redux state management. Search results must be rendered on to the main view itself without refreshing/reloading the page or taking the user to a new page.

3. Virtual DOM Rendering to be closely monitored to ensure only relevant components are getting re-rendered during state changes.

4. The listing page must have three vertically scrollable columns which is not horizontally scrollable with no visible scroll bars.

# Technical Details

1. Slices folder has the image assets, all of which should be used for this test. This includes poster images which are referenced to in the JSON discussed below. Note that the images shown in the Designs section are not the ones to be used(Do not slice up the images from Designs section to create icons or header).

2. API folder has a few JSON files with naming PAGEAPI-PAGE(#NUM).json. These are to be used as mock data for the pages (including specifying titles and poster images to be displayed). You will need to retrieve the data, one JSON page at a time as the user scrolls down the page. Do not embed the JSON files inside the app & do not fetch all JSON pages at once, they should be loaded as the user navigates and approaches the end of the current data set. This lazy loading should be done in a seamless way without the user noticing that additional data is loading (no pausing of scroll or blocking loaders during scroll).

3. Use a Redux store for the above JSON data.

4. Two content items on Page 3 have edge cases which you will need to think creatively on how to solve without breaking the UI consistency.

# Notes

1. Push the app source to a GitHub repo.

2. Host the app using GitHub Pages (You may follow this article: https://bit.ly/2OHRHqO)

3. Include Readme/release notes if you feel you need to explain any features (technical/design decisions) or known issues.

4. Think about usability and ensure as close a match to the design as possible.

5. Demonstrate your ability to write maintainable code.

6. Extra points for :
Readable code 
Writing Unit Tests in Jest
Modular, component based implementation
References : YouTube for some ideas on the user experience#