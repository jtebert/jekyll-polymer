A Jekyll theme built with Google's Polymer library and following the material design specifications.

There are a few custom web components included (mostly for the cards and navigation drawer) designed to match the Material design specifications.

## Installation instructions.

- Clone this repository or download it as a .zip file and unzip.
- From the project root folder, run `npm install` and `bower install` to install dependencies (including Polymer)
- Run the local server with `gulp serve`.
- Generate the static site for production by running `gulp`.
  **Note:** This vulcanizes and minimizes the code, so I highly recommend using this output instead of the automatically generated `_site` folder or (if you're using Github Pages) letting it generate the static code.

## Features

- Full-text searching with [simple-jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search)
- Paginated home page
- Support for images in posts' YAML frontmatter (appears on cards in previews)
- Support for threaded comments with Disqus


## Future Improvements:

- When fontawesome-icons updated to 4.3 in Bower, switch to that
- Figure out using font awesome icons in iron-icons
- Icons for sharing on social media (need to figure out fontawesome icons first)
- Fix title text over search bar
- Search
    - Ripple effect in search results on click (needs set height)
    - Escape toggles search show
    - arrow keys/tab moves focus on search results
    - better animation for search bar leaving/entering
    - Figure out why search back button is too far to the right
- Navigation drawer
    - Add copyright info to bottom
    - Change hover effect on drawer items (see Google Music)
    - Make selected/active items in drawer colored
- Page transition animations
- Give option of setting card-colorbar color (see paper-drawer-panel drawerWidth for example)
- Add ripple effect to nav drawer menu items
- Pagination:
    - Maybe replace with actual buttons
    - Prevent ripple on disabled links (`page-link[disabled] paper-ripple {display: none;}`)
    - hover effects like buttons?
    - Handle if it gets too wide for screen? (limit number of page links)
- Markdown/post formatting for (see StackEdit):
    - tables
    - lists
    - headings
    - blockquote
    - inline code
    - MathJax (add JS - see materialize-blog)
    - footnotes / footnote links
- Add material box or lightbox for images
- Syntax highlighting with Polymer colors (convert from prettify to highlight: `polymer-docs/css/prettify/`)