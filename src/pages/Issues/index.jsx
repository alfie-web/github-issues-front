import IssuesList from './components/List'

const IssuesPage = () => {
   return (
      <main className="Issues page">
         <div className="container">
            <div className="box">
               <h1>Issues</h1>
               {/* <Sorting /> */}
            </div>

            <div className="Todo__items">
               <IssuesList />
            </div>
         </div>
      </main>
   )
}

export default IssuesPage
