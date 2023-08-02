module.exports = {
  install: function (app) {
    app.mixin({
      beforeCreate: function () {
        const constants = this.$options.constants;
        if (constants) {
          const computeds = {};
          Object.keys(constants).forEach(function (constantKey) {
            computeds[constantKey] = function () {
              return Object.freeze(constants[constantKey]);
            };
          });
          this.$options.computed = {
            ...this.$options.computed,
            ...computeds
          };
        }
      },
    });
  },
};
