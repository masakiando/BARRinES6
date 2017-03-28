// 動的インポートはES6ではサポートされていないため、インポートの代わりにrequireを使用しています。
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
