import React from 'react'

import LogsList from './components/List'

import './Logs.sass'

const LogsPage = () => {
   return (
      <main className="Logs page">
         <div className="container">
            <h1>Logs</h1>

            <LogsList />
         </div>
      </main>
   )
}

export default LogsPage
