/* Updates fa-icons.html with latest Font Awesome icons */

var // Node Modules
	extend = require("extend"),
	fs = require("fs"),
	Handlebars = require("handlebars"),
	request = require("request"),
	yaml = require("js-yaml");

var // Request options (proxy?)
	requestOptions = {
		proxy: ""
	},
	// Raw repo url
	rawRepo = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/",
	// Request urls
	urls = {
		yml: rawRepo + "src/icons.yml",
		svg: rawRepo + "src/assets/font-awesome/fonts/fontawesome-webfont.svg"
	},
	// Base icon width
	iconWidth = 1792,
	// Output SVG object
	svg = {
		begin: Handlebars.compile("<!--\n" +
			"Polymer icon set generated from Font Awesome SVG Font\n" +
			"https://github.com/vangware/fontawesome-iconset\n\n" +
			"@element iron-iconset-svg\n" +
			"@demo demo.html\n" +
			"-->\n" +
			"<link rel=\"import\" href=\"../iron-icon/iron-icon.html\">\n" +
			"<link rel=\"import\" href=\"../iron-iconset-svg/iron-iconset-svg.html\">\n" +
			"<iron-iconset-svg name=\"{{name}}\" size=\"" + iconWidth + "\">\n" +
			"<svg><defs>\n"),
		defs: {},
		end: "</defs></svg>\n</iron-iconset-svg>"
	},
	// Icon template
	template = Handlebars.compile("<g id=\"{{name}}\" transform=\"scale({{scaleX}} {{scaleY}}) translate({{shiftX}} {{shiftY}})\"><path d=\"{{path}}\"/></g>\n"),
	// Icons object
	icons = {},
	// Pixel base size
	pixelBase = 128,
	// Generate icon and addit to output svg
	generateIcon = function (iconData, svgPath, params) {
		"use strict";
		var size = iconWidth / params.horizAdvX,
			shiftX = -(-(iconWidth - params.horizAdvX) / 2),
			def;
		size = size > 1 ? 1 : size;
		def = template(extend({
			name: iconData.id,
			path: svgPath
		}, params, {
			scaleX: size,
			scaleY: -size,
			shiftX: shiftX < 0 ? 0 : shiftX,
			shiftY: -(1280 + 2 * pixelBase)
		}));
		iconData.categories.forEach(function (category) {
			if (svg.defs[category]) {
				svg.defs[category].push(def);
			} else {
				svg.defs[category] = [def];
			}
		});
	};

console.log("Request YML ...");
request(extend(true, requestOptions, {
	url: urls.yml
}), function (ymlError, ymlResponse, iconsYaml) {
	"use strict";
	console.log("Request SVG ...");
	request(extend(true, requestOptions, {
		url: urls.svg
	}), function (svgError, svgResponse, fontData) {
		var yamlIcons = yaml.safeLoad(iconsYaml).icons,
			lines = fontData.toString("utf8").split("\n");
		yamlIcons.forEach(function (icon) {
			var categories = icon.categories;
			icons[icon.unicode] = {
				id: icon.id,
				categories: ["all"]
			};
			categories.forEach(function(category) {
				var normalizedCategory = category.toLowerCase().replace(/ /g, "-").replace("-icons", "");
				icons[icon.unicode].categories.push(normalizedCategory);
			});
		});
		console.log("Parsing icons ...");
		lines.forEach(function (line) {
			var match = line.match(/^<glyph unicode="&#x([^"]+);"\s*(?:horiz-adv-x="(\d+)")?\s*d="([^"]+)"/),
				unicode, svgPath, horizAdvX;
			if (match) {
				unicode = match[1];
				horizAdvX = match[2];
				svgPath = match[3];
				if (icons[unicode]) {
					generateIcon(icons[unicode], svgPath, {
						horizAdvX: horizAdvX ? horizAdvX : 1536
					});
				}
			}
		});
		console.log("Writing icons to files ...");
		for (var def in svg.defs) {
			fs.writeFileSync("fa-" + def + ".html", svg.begin({ name: (def === "all") ? "fa" : ("fa-" + def) }) + svg.defs[def].join("") + svg.end);
		}
	});
});
