A Jekyll theme built with Google's Polymer library and following the material design specifications.

There are a few custom web components included (mostly for the cards and navigation drawer) designed to match the Material design specifications.

**Note:** Demo does not yet show current version

## Installation instructions.

- Clone this repository or download it as a .zip file and unzip.
- From the project root folder, run `npm install` and `bower install` to install dependencies (including Polymer)
- Run the local server from the `app` directory with `jekyll serve`.

## Features

- Full-text searching with [simple-jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search)
- Paginated home page
- Support for images in posts' YAML frontmatter (appears on cards in previews)
- Support for threaded comments with Disqus
- Google Analytics integration

## Future Improvements:

- Add 'source' option for YAML frontmatter
- increase spacing between list items
- Search
    - Ripple effect in search results on click (needs set height)
    - Escape toggles search show
    - arrow keys/tab moves focus on search results
    - better animation for search bar leaving/entering
- Navigation drawer
    - Change hover effect on drawer items (see Google Music)
    - Make selected/active items in drawer colored
- Page transition animations
- Give option of setting card-colorbar color
- Add ripple effect to nav drawer menu items
- Pagination:
    - Maybe replace with actual buttons
    - hover effects like buttons?
    - Handle if it gets too wide for screen? (limit number of page links)
- Tags
    - Show tags with posts
    - Allow filtering by tag
- Add material box or lightbox for images
- Syntax highlighting with Polymer colors (convert from prettify to highlight: `polymer-docs/css/prettify/`)
- Make it production friendly with gulp/grunt code minimization
    - Run the local server with `gulp serve`.
    - Generate the static site for production by running `gulp`.
      **Note:** This vulcanizes and minimizes the code, so I highly recommend using this output instead of the automatically generated `_site` folder or (if you're using Github Pages) letting it generate the static code.
