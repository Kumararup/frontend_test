We've got an initial folder and file structure in `src` prepared for you:

* `index.html` - HTML file with prepared markup (needs your improvements)
* `index.js` - this should be your main JS file which coordinates other JS modules
* `styles.scss` - this file will be taken as the entry point once you run any css related tasks like `npm run css`
* `styles/` - inside this folder you can add styles, classes, mixins, variables, etc that will help you to implement the required design as fast as possible. Please use the existing `_base.scss` file.
* `components/` - inside this folder you should add all the JavaScript components needed to make your solution work as it should.
* `assets/` - images and other assets to be used by this solution.
* `mocks/` - contains the JSON file(s) with the shop data (products list). You must never change anything directly in the JSON files.
* db/      -content mysql database script to crate database and inport data for this project

Please keep and use this structure.

### Coding

1. HTML
    - Make sure to add all needed HTML so that it fits the exercise requirements.
    - Please use semantically correct HTML5 markup [[help]](http://html5doctor.com/lets-talk-about-semantics/) while having in mind Web Accessibility.

2. JavaScript
    - Please use plain JavaScript, *no libraries or frameworks* are allowed (such as React, Vue, Angular, jQuery, Lodash, etc).
    - We would like to see YOUR clean and modular JavaScript code (while commented when needed).
    - Use of recent JavaScript features (eg: ES6, ES2016, ES2017) is highly encouraged as long as supported by latest chrome (so you shouldn't have to transpile/compile your JavaScript).

3. CSS
    - We kindly ask you to use SASS.
    - Your SASS code should be split into modules. Add into each component (created inside `src/components/`) a new `.scss` file with the component's name. E.g. within `src/components/shoppingItem` you want to add `_shoppingItem.scss`.
    - Bootstrap or similar component frameworks are not allowed.

## Requirements
## DESIGN (MEASUREMENTS && ASSETS)
    - DESIGN LINK -> https://www.figma.com/file/F0Hg8heTsyPg7hSGPonrc2/Teste-FE?node-id=0%3A1
        - You should use the provided [measurements] on figma when styling the website.
        - the needed images are provided in figma you must export them and fill the list.json and listHero.json with the path.

## FRONTEND
### Junior 

1. HTML markup
    - Please add to the existing src/index.html file the semantic markup needed to achieve the required design and planned behavior.
      - Depending on your implementation (regarding modularization/componentization) you may chose to have some Html in partials outside of index.html. If that's case (which is fine) we would still like you to add at least the base structural elements (eg: header, footer, etc) in the base index.html file.

2. App's dynamic behavior - please add the required JavaScript and styles so that:
    - Initially, and while fetching the shop data from `mocks/list.json` (but as if it was from a remote source/endpoint), only the header (with logos, shopping bag, etc) and the loading spinner are visible (as in page4 on figma)
    - After fetching the products list the loading spinner will disappear and the user sees the title, filter input and the list of products (as in page1 on figma)
    - There is no need to implement the filtering feature, but the filter input should be there, properly styled
    - When the user clicks a product component's (or the respective `Add to Shopping Bag` button) it updates the total value of the shopping bag and marks it as selected (as in page6 on figma)
    - When the user clicks a selected product component's (or the respective `Remove from Shopping Bag` button) it updates the total value of the shopping bag and unselects it (making it look as initially - again showing the `Add to Shopping Bag` button)

4. When the browser width is smaller than 1024px the whole page should just have the phrase "For a better expirience use a wide window" (as in page5 on figma).

5. BONUS (Optional)
    - When the user types a string longer than 2 characters long it filters the list by the product's name (restoring it when only using 2 or less characters)
    - When the user types a string which is not part of any products's name a phrase saying "No results for: 'word'" should appear in the products list area (as in page3 on figma)

### ADVANCED
*Please make sure all of the previous 5 points (including the "5. Bonus") are implemented before starting with the following ones.*

6. Leave an empty file named "I AM A PRO" in the root folder.

7. App's dynamic behavior
    - Instead of `mocks/list.json` please consume and handle data from `mocks/listHero.json`
      - The retrieved list should be transformed to fit our needs (eg: each product name consists of the "type" plus the "color", etc.)

8. Add a `build` task (in the package.json scripts) to minify the JS and CSS while outputting (the Html + CSS + JS + Assets + Mocks) into a “dist” folder.
    - Optionally: Depending on your implementation you may also want to bundle all JS before minifying.
    - Feel free to change this `build` task process to better fit your implementation, but make sure in the end a “dist” folder is created with all the needed files for it to run successfully.

9. Create a custom loading width only scss while the products don't appear (as in page4 on figma).

