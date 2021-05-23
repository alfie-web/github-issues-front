import Routes from './components/Routes'
import IssuesPage from './pages/Issues'
import IssuePage from './pages/Issue'

const ROUTES = [
   { id: 1, path: '/', component: IssuesPage },
   { id: 2, path: '/:number', component: IssuePage },
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
