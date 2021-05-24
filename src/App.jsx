import Routes from './components/Routes'
import IssuesPage from './pages/Issues'
import IssuePage from './pages/Issue'
import LogsPage from './pages/Logs'

const ROUTES = [
   { id: 1, path: '/logs', component: LogsPage },
   { id: 2, path: '/', component: IssuesPage },
   { id: 3, path: '/:userName/:repoName/:number', component: IssuePage },
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
