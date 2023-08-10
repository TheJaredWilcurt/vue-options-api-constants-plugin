/**
 * The Vue Constants Plugin which allows adding a constants section to an Options API component.
 * @type {object}
 */
module.exports = {
  /**
   * Vue Plugin install function, called by Vue.js. Installs the Constants plugin.
   *
   * @param {import("@vue/runtime-core/dist/runtime-core.d").App} app  The Vue app instance.
   */
  install: function (app) {
    // Creates a global mixin applied to every component in the app
    app.mixin({
      // Creates a lifecycle hook in each component
      beforeCreate: function () {
        // Checks if the component is using the Options API and has a constants section
        const constants = this.$options.constants;
        if (constants) {
          // Loop over the constants creating a computed property for each
          const computeds = {};
          Object.keys(constants).forEach(function (constantKey) {
            computeds[constantKey] = function () {
              // In case the value is not primitive, ensure it is frozen
              return Object.freeze(constants[constantKey]);
            };
          });
          // Add the computed constants to the computed properties in the current component
          this.$options.computed = {
            ...this.$options.computed,
            ...computeds
          };
        }
      }
    });
  }
};
