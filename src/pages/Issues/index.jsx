import IssuesList from './components/List'
import IssuesSort from './components/Sort'

import './Issues.sass'

const IssuesPage = () => {
   return (
      <main className="Issues page">
         <div className="container">
            <div className="box">
               <h1>Issues</h1>
               <IssuesSort />
            </div>

            <div className="Todo__items">
               <IssuesList />
            </div>
         </div>
      </main>
   )
}

export default IssuesPage
