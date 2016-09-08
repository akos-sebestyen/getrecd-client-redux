import HomeViewContainer from './containers/HomeViewContainer'
import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HomeView = require('./containers/HomeViewContainer').default
      const reducer = require('routes/tournaments/modules/tournaments').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'tournaments', reducer })

      /*  Return getComponent   */
      cb(null, HomeView)

    /* Webpack named bundle   */
    }, 'homeview')
  }
})
