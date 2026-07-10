import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routers'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
