import { config } from '../config'
import Create from '../pages/Create'
import Scanner from '../pages/Scanner'
const publicRoutes = [
  {
    path: config.routes.create,
    component: Create,
  },
  {
    path: config.routes.scanner,
    component: Scanner,
  },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
