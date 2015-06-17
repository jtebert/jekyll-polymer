A Jekyll theme built with Google's Polymer library and following the material design specifications.

There are a few custom web components included (mostly for the cards and navigation drawer) designed to match the Material design specifications.

## Installation instructions.

- Clone this repository or download it as a .zip file and unzip.
- From the project root folder, run `npm install` and `bower install` to install dependencies (including Polymer)
- Run the local server with `gulp serve`.
- Generate the static site for production by running `gulp`.
  **Note:** This vulcanizes and minimizes the code, so I highly recommend using this output instead of the automatically generated `_site` folder or (if you're using Github Pages) letting it generate the static code.

## Future Improvements:

- Search functionality with [simple-jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search).
- Pagination on home page. (Need to make material-looking pagination navigation.)
- Page transition animations
- Header image in menu.
- Change hover effect on drawer items (see Google Music)
- Make "selected" items in drawer colored
- Give option of setting card-colorbar color (see paper-drawer-panel drawerWidth for example)
- Add ripple effect to nav drawer menu items
- Pagination:
    - Prevent ripple on disabled links
    - hover effects like buttons?
    - Handle if it gets too wide for screen? (limit number of page links)
- Get code highlighting CSS from Polymer docs
- Markdown/post formatting for (see StackEdit):
    - tables
    - lists
    - headings
    - blockquote
    - inline code
    - divider (`<hr/>`) (color)
    - bold font-weight?
    - definitions
    - MathJax (add JS - see materialize-blog)
    - footnotes / footnote links
- Add material box or lightbox for images
- Syntax highlighting with Polymer colors (convert from prettify to highlight: `polymer-docs/css/prettify/`)