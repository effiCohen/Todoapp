import './App.css'
import AppRoutes from './routes/appRoutes'
import { Provider } from 'react-redux'
import myStore from './redux/store'
const App = () => {

  return (
    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
  )
}

export default App
