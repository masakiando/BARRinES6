# [Building Applications in React and Redux in ES6](http://www.pluralsight.com/author/cory-house) on Pluralsightの学習と発展

## Pluralsightの学習
1. Author administration
2. Delete course
3. Hide empty course list
4. Unsaved changes message
5. Client-side validation
6. Handle 404’s
7. Show # courses in Header 8. Pagination
9. Sort course table
10. Revert abandoned changes

## 発展(独自で実装した機能)
1. jwt login&logout
2. Server-side validation
3. Client-side HOC authentication
4. game crud  fetch mongodb
5. player crud  axios mongodb
6. FlashMessage
7. Loding

### Production Dependencies
| **Dependency**     | **Use**                                                |
|:-------------------|:-------------------------------------------------------|
| babel-polyfill     | Polyfill for Babel features that cannot be transpiled  |
| bootstrap          | CSS Framework                                          |
| jquery             | Only used to support toastr                            |
| react              | React library                                          |
| react-dom          | React library for DOM rendering                        |
| react-redux        | Redux library for connecting React components to Redux |
| react-router       | React library for routing                              |
| react-router-redux | Keep React Router in sync with Redux application state |
| redux              | Library for unidirectional data flows                  |
| redux-thunk        | Async redux library                                    |
| toastr             | Display messages to the user                           |

### Development Dependencies
| **Dependency**                  | **Use**                                                                                                   |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------|
| babel-cli                       | Babel Command line interface                                                                              |
| babel-core                      | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                    | Adds Babel support to Webpack                                                                             |
| babel-plugin-react-display-name | Add displayName to React.createClass calls                                                                |
| babel-preset-es2015             | Babel preset for ES2015                                                                                   |
| babel-preset-react              | Add JSX support to Babel                                                                                  |
| babel-preset-react-hmre         | Hot reloading preset for Babel                                                                            |
| babel-register                  | Register Babel to transpile our Mocha tests                                                               |
| cheerio                         | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| colors                          | Adds color support to terminal                                                                            |
| compression                     | Add gzip support to Express                                                                               |
| cross-env                       | Cross-environment friendly way to handle environment variables                                            |
| css-loader                      | Add CSS support to Webpack                                                                                |
| enzyme                          | Simplified JavaScript Testing utilities for React                                                         |
| eslint                          | Lints JavaScript                                                                                          |
| eslint-plugin-import            | Advanced linting of ES6 imports                                                                           |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                                                             |
| eslint-watch                    | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill            | Polyfill to support hot reloading in IE                                                                   |
| expect                          | Assertion library for use with Mocha                                                                      |
| express                         | Serves development and production builds                                                                  |
| extract-text-webpack-plugin     | Extracts CSS into separate file for production build                                                      |
| file-loader                     | Adds file loading support to Webpack                                                                      |
| jsdom                           | In-memory DOM for testing                                                                                 |
| mocha                           | JavaScript testing library                                                                                |
| nock                            | Mock HTTP requests for testing                                                                            |
| npm-run-all                     | Display results of multiple commands on single command line                                               |
| open                            | Open app in default browser                                                                               |
| react-addons-test-utils         | Adds React TestUtils                                                                                      |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                                                          |
| redux-mock-store                | Mock Redux store for testing                                                                              |
| rimraf                          | Delete files                                                                                              |
| style-loader                    | Add Style support to Webpack                                                                              |
| url-loader                      | Add url loading support to Webpack                                                                        |
| webpack                         | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware          | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware          | Adds hot reloading to webpack                                                                             |
