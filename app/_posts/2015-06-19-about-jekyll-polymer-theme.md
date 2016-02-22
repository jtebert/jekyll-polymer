---
layout: post
title: About the Jekyll Polymer Theme
---

This theme was created using the Google's Polymer 1.0. It's currently a first draft, so there are still features I plan to add and fix. ([See the Github repository for details.](https://github.com/jtebert/jekyll-polymer))

I created this theme because I couldn't figure out how to set up a Jekyll project to play nicely with Polymer, and because I didn't find any Jekyll blog themes available that used Polymer or followed Google's material design specifications.

<!--more-->

# Structure

- `elements/`: Custom web components using Polymer
- `scripts/`: Javascript. Will be minimized when built.
- `styles/`: Custom CSS. CSS used here will be minimized when built.
- `bower_components`: Content installed via bower goes here
- `node_modules`: Content installed via npm goes here

# Build Instructions

This part is pretty brutal right now but gets the job done. Hopefully I'll get better with gulp and clean this up soon.

For now, just use Jekyll to build and serve. The gulp stuff doesn't really work yet.