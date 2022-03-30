# Celestial - A Fullstack Svelte & Backendless Template

An easy-to-use starter repository that shows you how to build a fully functioning website with [SvelteKit](https://kit.svelte.dev/). Inside you'll find everything you need to create a fully functioning fullstack site with authentication, databases, and members portal. This repo contains pre-built components like a header, navigation bar, footer, database calls, error handling, and a whole sleuth of utilities.

## Helpful Links

* [SvelteKit - Production ready Svelte Project](https://kit.svelte.dev/)
* [Svelte - Base Javascript Framework](https://svelte.dev/)
* [Backendless - Backend as a Service Platform](https://backendless.com/)
* [Netlify - Static Site Hosting](https://eleventy-website-template.netlify.app/)
* [Project GitHub Page](https://github.com/brewhousedigital/celestial-svelte)

This project uses Tailwind and DaisyUI for styling

* [Tailwind](https://tailwindcss.com/)
* [DaisyUI](https://daisyui.com/)

The base version is hosted here:

* [Base Celestial Site](https://build.celestial.dev/)

___


## Deploy this repo to Netlify

Netlify can auto-build this project if you want to try it out.

[⚡ Autodeploy this repo to a Netlify site](https://app.netlify.com/start/deploy?repository=https://github.com/brewhousedigital/celestial-svelte)


___


## Getting Started / Quick Start

### 1. Use this repo as a template

[🔥 Create a new github site with this template](https://github.com/brewhousedigital/celestial-svelte/generate)

_Or Download/Clone the project to your computer_

### 2. Install dependencies

`npm install`

### 3. Set up your Backendless account

Create your `.env` file and add your Backendless API and App Keys

### 4. Start the project

`npm start` This will start the local server and launch the project to the default localhost:3000.

### 5. Celebrate! And start coding!


___

## The inner workings ⚙
This SvelteKit project has a couple of features and utilities that speed up development. A quick TLDR:
* Uses [Tailwind](https://tailwindcss.com/) and [Daisy UI](https://daisyui.com/) by default
* Multiple pre-built pages such as the homepage, login, registration, members portal, and profile
* Built-in layout file along with an error handling page
* An easy-to-modify JSON file that controls settings across the app 
* Reusable components such as input fields, alert bars, and private links
* Specific components such as a header, footer, user avatar, and error alert bars
* JSON controlled private routing
* Global Svelte stores for user data and error messaging

___

## How to use this website template
The page structure looks like this:

### ⏹ src (Source)
Contains all of your project files

___

#### ✳ lib (Library)

All of your data, components, utilities, and settings will live inside the `lib` folder. It is also aliased in the project so you can reference any component by writing out your import statement like this:

```javascript
import MyComponent from "$lib/components/MyComponent.svelte";
```

No more `../../../` directory searching!

There are four main folders here, and two helper files

##### components

##### data

##### functions

##### icons

___

#### ✳ routes (Your Pages and APIs)
The includes folder contains a couple of different sub-folders that help structure how you put things on your website. Inside you'll find:
1) layouts
2) partial-css
3) partial-js
4) site-components

___

#### ✳ app.html (The Entry Point into Your App)

___













##### 🅾 layouts
You can define how the overall look of your site appears using the `layouts` folder. There is a base template that includes your `<html>` , `<head>`, and `<body>` tags, but other than that, you are free to make as many site-themes as you want. You can create a custom view for unauthenticated users, and a totally different view for authenticated users. You can even cascade themes together. A good example of this is the `post.njk` layout also references the `base.njk` layout so that you don't have to write redundant code.

This templating system achieves this using YAML. You can see at the top of most files, they start with three dashes, and end with three dashes. Everything inside this section is YAML. The `post.njk` layout references the `base.njk` layout this way.

```yaml
---
layout: layouts/base.njk
permalink: /posts/{{ title|slugURL }}-{{ date|slugURL }}/
---
```
It also generates a dynamic URL based on the blog post title and the current date. This sort of follows how the Medium blog site publishes their content.

##### 🅾 partial-css
This is kind of like SASS/LESS, but you can use plain CSS if you want. Adding in SASS support is easy but not built in by default. The framework allows for you to create multiple CSS files, and then it will compile them all and minify them for you all behind the scenes.

Setting up a new partial is easy!

Step 1) Create a new CSS file inside the `partial-css` folder. Let's call this one `agency.css`.
```css
#agency-body {
  background-color: lightcoral;
}

.agency-text {
  font-family: "Comic Sans MS";
  font-size: 30px;
  font-weight: 100;
}
```

Ok, so our agency css is done, and now we need to add it to this file:

`source/_includes/site-components/head-css-tags.njk`

In the example below: starting at the top is the Bootstrap library, a *partial* styles.css file, and the new agency css *partial* file. Everything placed inside the `{% set css %}...{% endset %}` will be combined, minified, and placed inline on your page. You can add the new css file via an `include` function that's built into nunjucks. Make sure to add it before the `{% endset %}` tag.

```html
<link href="/css/bootstrap.css" rel="stylesheet">
<style>
  {% set css %}
  {# Custom site styles #}
  {% include "source/_includes/partial-css/styles.css" %}
  {% include "source/_includes/partial-css/agency.css" %}
  {% endset %}
  {{ css | minifyCSS | safe }}
</style>
```

You'll learn what this whole file means later in the documentation. Just know that this will combine and minify any CSS files you place in here. The Bootstrap library is also being trimmed of any styles that weren't utilized in your project, so it keeps the library as small as possible.

##### 🅾 partial-js
Much like the CSS setup above, the `partial-js` folder functions exactly the same. You can add partial javascript files and then add them to your footer via the `includes` function from nunjucks.

One difference is that your javascript is not minified by default when working locally. The Terser library is not very fast, so enabling JS minification in local would add a few seconds to every file change you did. Instead, we have an environment variable set, so you can enable this only in production. If you need help setting up environment variables on Netlify, you can follow the instructions on this Dev.to article: [🤖Minifying JS in Eleventy on production](https://dev.to/brewhousedigital/minifying-js-in-eleventy-on-production-1848). All of this code is already set up from the tutorial, so the only thing you'll need to do is add the environment secret to Netlify.

Create your javascript partial files in the Partial JS folder:

`source/_includes/partial-js/my-custom-modal-function.js`

```javascript
document.querySelector("body").addEventListener("click", function() {
    alert("This is my new modal");
});
```

You can find all the javascript file references here:

`source/_includes/site-components/footer-js-tags.njk`

You can add any files inside the `{% set js %}...{% endset %}` tag to have them included in your project. Here's a full example below:

```html
<script src="/js/bootstrap.js"></script>
<script>
  {% set js %}
  {% include "source/_includes/partial-js/scripts.js" %}
  {% include "source/_includes/partial-js/my-custom-modal-function.js" %}
  {% endset %}
  {{ js | jsmin | safe }}
</script>
```

P.s. if you don't need any of the bootstrap javascript functionality, feel free to comment out the bootstrap library reference to speed up your site.

##### 🅾 site-components

The site components folder holds site-wide things such as your header, navigation bar, footer, css tags, js tags, and meta tags. These are split out into individual files for easier management. Any of these can be wrapped in nunjucks `if` statements for specific customization.

A cool example of this is located in the `head-meta-tags.njk` file. The nunjucks templates will detect if it is rendering a blog post, and change the open-graph meta content from "website" to "article":

```twig
{% if layout == "layouts/post.njk" %}
  <meta property="og:type" content="article" />
{% else %}
  <meta property="og:type" content="website" />
{% endif %}
```

___

#### ✳ feed
Ignore this folder. Not sure what it does.

___

#### ✳ images
These are your images! Anything in here will automatically get exported to your `_site` folder when the site is generated. The world is your 🦪.

___

#### ✳ pages
All of your pages go here! You don't have to follow any kind of URL structure. You can create as many folders, or organize your pages however you want. Each page has its own "permalink" YAML tag at the top, so you can define where that page is rendered without having to worry about where you place it.

There are a couple of pre-built pages such as the homepage, about us page, 404 page, blog page, sitemap, and tags (or categories) page templates.

##### 🅾 page-components
Page components are reusable snippets of code that can be placed anywhere on your site. There are two pre-built page components that come with the framework.

`blog-listing-template.njk` is a template that builds the blog listing view (not the actual blog post page). This can be used to create a list of blogs on a page, or a carousel, or anything you can dream of.

`latest-3-posts.njk` generates the latest three blog posts using the `blog-listing-template.njk` page component as a template.

Additional components like reusable alert bars, site-wide modals, or just anything you find yourself repeating can go in here.

___

#### ✳ posts
This is where your blog content lives. These pages utilize a lot of YAML options to give you as much flexibility as possible. You can define tags (or categories), add titles, descriptions, and dates.

There are three sample blog posts for you to get started. These can be organized into any kind of folder structure you want. All together, inside yearly folders, yearly + monthly folders, or whatever works best for your type of organization.

The YAML in each post looks something like this:
```yaml
---
layout: layouts/post.njk
title: "This is my first post"
description: "This is a post on My Blog about agile frameworks."
date: "2018-06-01"
tags:
  - "Home Furnishings"
  - "Kitchen Decorations"
---
```

The first thing that gets declared is the `layout` key. This lets the post know that this should use the `post.njk` template when it is compiled. If you need to alter that template, you can go into `source/_includes/layouts/post.njk`.

Attributes like the `date` are used to organize and sort the blog posts. The date value must be structured like `YYYY-MM-DD`. You can use Luxon, or any other date library to pretty-print that on your post content if you ever need.

The `tags` system is the only thing that needs to be watched for. If you ever try to re-indent the lines of code in your file, sometimes the IDE can remove the spacing on the category, which will cause the tags to be discarded during the build. Each tag (or category) needs to have 2 spaces, a dash, then the name of the category in quotes.

Each post will automatically have its permalink set using the title and the published date. You can alter this in the post template found here: `source/_includes/layouts/post.njk`.

___

### ⏹ _site
This is where your compiled code is saved. This is what Netlify picks up and deploys live. All of your static files are put into this folder. Don't touch this code because it gets overwritten every time the site is built.

If you ever see an error on your local site, and you aren't sure where it's coming from, sometimes you can fix it by stopping the local server, deleting the entire `_site` folder, and then rerunning the build command. This way it creates a brand-new folder for you.
___


## Bonus materials

### 11ty Documentation
[https://www.11ty.dev/docs/](https://www.11ty.dev/docs/)


### Nunjucks Templating API

[https://mozilla.github.io/nunjucks/templating.html](https://mozilla.github.io/nunjucks/templating.html)


### Minifying Javascript in Production
[https://dev.to/brewhousedigital/minifying-js-in-eleventy-on-production-1848](https://dev.to/brewhousedigital/minifying-js-in-eleventy-on-production-1848)


### Using PurgeCSS with Bootstrap and Eleventy
[https://dev.to/brewhousedigital/using-purgecss-with-bootstrap-and-eleventy-j7p](https://dev.to/brewhousedigital/using-purgecss-with-bootstrap-and-eleventy-j7p)


### Icons
Need to generate manifest/favicon icons for your site?

[https://appiconmaker.co/](https://appiconmaker.co/)

### Built-in Functions
*Coming Soon*
