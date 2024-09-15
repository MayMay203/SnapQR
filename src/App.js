import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import {publicRoutes} from './routes'
import DefaultLayout from './Layout/DefaultLayout'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = route.Layout
            if (!Layout) {
              Layout = DefaultLayout
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
