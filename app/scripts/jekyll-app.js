Polymer.setPassiveTouchGestures(true);

class jekyllApp extends Polymer.Element {
  static get is() { return 'jekyll-app'; }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      routeData: Object,
      subroute: Object,
      rootPath: String,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  _routePageChanged(page) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'view1' in that case.
    this.page = page || 'view1';
    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }
  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    const resolvedPageUrl = this.resolveUrl('my-' + page + '.html');
    Polymer.importHref(
      resolvedPageUrl,
      null,
      this._showPage404.bind(this),
      true);
  }
  _showPage404() {
    this.page = 'view404';
  }

}

window.customElements.define(jekyllApp.is, jekyllApp);
