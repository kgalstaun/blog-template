# blog-template

A template for a blog, using Vue 3, Tailwind, Hypgraph and Firebase. The app is setup generically can be easily utilized and edited for different use cases. 

1. Vue 3: easy to learn lightweight front-end framework, with great support and documentation.
2. Tailwind: a utility-first css framework which greatly reduces the amount of css you have to write and maintain.
3. Hygraph: CMS which is amazing for smaller projects as it is free to use, has a simple and clean interface. Also it is queried with GraphQL, which is a big plus. 
4. Firebase: the place where we host our project, and as with Hypgraph, super easy setup and with a free low-tier.

# Explanation of techniques and design patterns 

App.vue and GraphQL qeuries

1. App.vue is the main component which contains all main elements of the page, seperated in subcomponents (HeaderComponent, NavComponent, ContentComponent, etc.)
2. App.vue contains one fetchData() function which makes the first GraphQL API query to Hygraph for retrieving the meta-info of the site (headerText, footerText).
3. If that call succeeds, the subcomponents are loaded, one of which is the ContentComponent. This makes it's own GraphQL query to retrieve the content shown on the page.
4. ContentComponent uses the route (and route params) and provides it with the query and expects to retrieve html, which is then  rendered on the page using the 'v-html' directive.

Hygraph

1. To connect the app with Hygraph, create a .env file with the key 'VUE_APP_API_ENDPOINT', pointing towards the API endpoint of your Hygraph workspace.
2. The QueryService can be imported in any component to make the call. For now it only contains a fetch() fn.
3. Currently there are two queries defined and used: the meta query (meta.js) for the general info and a data query (data.js) to retrieve content of a pag.
4. Creation and editing of schema's in Hygraph is also super-easy. Create an account on https://hygraph.com, setup a workspace, copy the API-endpoint, create your schema and add content.

State

1. In QueryState.js, the state of ongoing queries is managed. With the help of Vue 3 only a few lines are needed to build up a state management system - no need for a big outside package! This great blog post explains it very well: https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/. 
2. For now it is only used by the FooterComponent. If a new content is being fetched, it is not shown on the page. Of course a similar pattern can be implemented for every other state if needed.

SCSS & Tailwind

1. General SCSS rules are written in the styles/core folder, but mostly we rely on Tailwind which offers many generic utility classes.
2. Aside from the standard classes, we can override the config in tailwind.config.js. For instance the "xs", "sm", "md" etc. spacing values are overwritten with custom values. To use them in code, just add the "mb-lg" class for margin-bottom with the "lg" value.
3. The docs are great: https://tailwindcss.com/docs/installation.

Firebase

1. Hosting a Vue App on Firebase takes, assuming you have a Google account, less then five minutes.
2. See blog posts such as https://medium.com/@rachidsakara/how-to-deploy-vue-js-applications-with-firebase-hosting-40cfa7f724e4 for explanation.





