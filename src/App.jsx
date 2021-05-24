import eventEmitter from './helpers/eventEmitter'
import Routes from './components/Routes'
import Flash from './components/Flash'
import IssuesPage from './pages/Issues'
import IssuePage from './pages/Issue'
import LogsPage from './pages/Logs'

window.flash = (message, type = 'success', position = 'top-right') => eventEmitter.emit('flash', { message, type, position })

const ROUTES = [
   { id: 1, path: '/logs', component: LogsPage },
   { id: 2, path: '/', component: IssuesPage },
   { id: 3, path: '/:userName/:repoName/:number', component: IssuePage },
]

const App = () => (
   <>
      <Flash />
      <div className="App">
         Hello!

         <Routes
            routes={ROUTES}
         />
      </div>
   </>
)

export default App
