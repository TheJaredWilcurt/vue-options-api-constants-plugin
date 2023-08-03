# Vue Options API Constants Plugin

Adds a constants section to your Options API components.


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
* You could return them in the `data` section, however then they would be reactive and mutatable, which is not good for constants.
* You could put them in the `computed` section, but then you'd have a lot of boilerplate, that this is abstracting away for you.
* You could return them in the `setup` section, but that too would make them reactive and mutable.


## Downsides

* Ctrl+Click from the template to the defintion doesn't work with Intellisense/VSCode. However, this may be fixable with some editor hints, as other tools, like Vuelidate and Pinia don't have this issue. If you know how to fix this, create a PR.
* This is a plugin, so by definition it is non-standard. However, there is nothing I can do about that as Vue's core team (*read: Evan*) does not want this feature in Vue itself, despite it being a very common need. Perhaps, if this plugin becomes popular (*tell your friends*), then it would be more likely to be officially added into Vue.
