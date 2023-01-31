# blog-template

A template for a blog, using Vue 3, Tailwind, Hypgraph and Firebase. The app is setup generically can be easily utilized and edited for different use cases. 

1. Vue 3: easy to learn lightweight front-end framework, with great support and documentation.
2. Tailwind: a utility-first CSS framework which greatly reduces the amount of CSS you have to write and maintain.
3. Hygraph: CMS which is amazing for smaller projects as it is free to use, has a simple and clean interface. Also it is queried with GraphQL, which is a big plus. 
4. Firebase: the place where we host our project. It is free and takes only a few minutes to setup.

# Run

1. npm install
2. npm run serve

# Explanation of techniques and design patterns 

## App.vue and GraphQL queries

1. App.vue is the main wrapper component containing all main elements of the page, divided in subcomponents (HeaderComponent, NavComponent, ContentComponent, etc.)
2. App.vue calls the fetchData() function to make the first GraphQL API query to Hygraph for retrieving the meta-info of the site (headerText, footerText).
3. If that call succeeds the subcomponents are loaded, one of which is the ContentComponent. This component makes its own GraphQL query to retrieve the content shown on the page (the part between the header and footer).
4. ContentComponent uses the route (and route params) to provides the query with a parameter. It expects to retrieve html, which is rendered on the page using the 'v-html' directive (https://vuejs.org/api/built-in-directives.html#v-html). 

## Hygraph

1. To connect the app with Hygraph, create a .env file with the key 'VUE_APP_API_ENDPOINT', pointing towards the API endpoint of your Hygraph workspace.
2. QueryService.js is imported in components to make the API call. For now it only contains a fetch() fn.
3. Currently there are two main queries: the meta query (defined in meta.js) for the general info and a data query (defined in data.js) to retrieve content of a page. The advantage of GraphQL queries is that, when reading the code of the queries, it is immediatly clear which fiedss are expected as a return value.
4. Creation and editing of schema's in Hygraph is super-easy: create an account on https://hygraph.com, setup a workspace, copy the API-endpoint, create a schema and add your first content.

## State management

1. In contentState.js and metaDataState.js the state of fetched data is managed. With Vue 3's "composition API" only a few lines are needed to build up a state management system, no need for a big outside package. This blog post explains it very well: https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/. 
2. For now the state of the metaData is stored  after the first fetch, as well as the (page) contenta after it is fetched. The respective components can import the getter functions and subscribe thereby subscribe the computed() functions which contain the data.

## SCSS & Tailwind

1. General SCSS rules are written in the styles/core folder, but mostly we rely on Tailwind which offers many generic utility classes.
2. Aside from the standard classes, we can override the config in tailwind.config.js. For instance the "xs", "sm", "md" etc. spacing values are overwritten with custom values. To use them in code, just add the "mb-lg" class for margin-bottom with the "lg" value.
3. The docs are great: https://tailwindcss.com/docs/installation.

## Firebase

1. Setting up the hosting and deployment of a Vue App on Firebase takes less then five minutes!
2. See blog posts such as https://medium.com/@rachidsakara/how-to-deploy-vue-js-applications-with-firebase-hosting-40cfa7f724e4 for explanation.





