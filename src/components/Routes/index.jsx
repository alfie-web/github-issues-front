import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const Routes = ({ routes = [] }) => {
   return (
      <Switch>
         {routes.map((route) => (
            (!route.hasOwnProperty('auth')) && (
               <Route
                  key={route.id}
                  exact
                  path={route.path}
                  component={route.component}
               />
            )
         ))}
         <Redirect from="*" to="/" />
      </Switch>
   )
}

Routes.defaultProps = {
   routes: [],
}

Routes.propTypes = {
   routes: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         path: PropTypes.string.isRequired,
         component: PropTypes.func,
         auth: PropTypes.bool,
      }),
   ),
}

export default Routes
