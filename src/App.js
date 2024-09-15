import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import {publicRoutes} from './routes'
import {DefaultLayout} from './Layout'
import { config } from './config'
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
          <Route path="/" element={<Navigate to={config.routes.scanner} />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
