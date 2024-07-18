# Vue Options API Constants Plugin

## Adds a constants section to your Options API components.

Under the hood the constants values are frozen (`Object.freeze()`) and returned as cached computed properties, accessible in the template.


## Use

1. `npm install --save vue-options-api-constants-plugin`
1. Import the plugin into your `main.js` and then `app.use` it, like so:
    ```js
    import { createApp } from 'vue';
    import constantsPlugin from 'vue-options-api-constants-plugin';
    
    const app = createApp({});
    app.use(constantsPlugin);
    app.mount('#app');
    ```
1. In any of your Options API components, you can now add a top level `constants` object, like so:
    ```html
    <template>
      <div>
        {{ BRAND_NAME }}
      </div>
    </template>

    <script>
    import { BRAND_NAME } from './constants.js';

    export default {
      name: 'AnExample',
      constants: {
        BRAND_NAME
      }
    };
    </script>
    ```

## Use via CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <script src="https://unpkg.com/vue@3.3.4/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/vue-options-api-constants-plugin@1.0.0/cdn.js"></script>
  </head>
  <body>
    <div id="app">
      {{ AN_EXAMPLE }}
    </div>
    <script>
      const AN_EXAMPLE = 'An example';

      const app = Vue.createApp({
        constants: {
          AN_EXAMPLE
        }
      });
      app.use(window.constantsPlugin);
      app.mount('#app');
    </script>
  </body>
</html>
```
* [JSFiddle Example](https://jsfiddle.net/wLcj1zb7/)


## Benefits

* The constants are frozen as computed properties under the hood, so you cannot mutate them, and if you attempt, you'll get a warning in the console.
* Gives you separation of concerns and code organization by having a place for all constants to live in each component.


### Why not use `data`, `setup`, `computed` or `methods`?

* `data` and `setup` sections would create reactive and mutatable variables, which you don't want for your constants.
* `computed` section works, but adds a lot of boilerplate that this plugin is abstracting away for you.
* `methods` section would have the same boilerplate as the computed, and additional boilerplate in the template (`{{ AN_EXAMPLE() }}`) and in the scripts (`this.AN_EXAMPLE()`)


## Downsides

* Ctrl+Click from the template to the defintion doesn't work with Intellisense/VSCode. However, this may be fixable with some editor hints, as other tools, like Vuelidate and Pinia don't have this issue. If you know how to fix this, create a PR.
