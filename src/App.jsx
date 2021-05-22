import IssuesPage from './pages/Issues'
import Routes from './components/Routes'

const ROUTES = [
   { id: 1, path: '/', component: IssuesPage },
   // { path: '/auth', component: AuthPage, auth: false },
]

const App = () => (
   <div className="App">
      Hello!

      <Routes
         routes={ROUTES}
      />
   </div>
)

export default App
