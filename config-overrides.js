const { override, addLessLoader, adjustWorkbox, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  adjustWorkbox((wb) =>
    Object.assign(wb, {
      skipWaiting: true,
    })
  ),
  addLessLoader()
);
