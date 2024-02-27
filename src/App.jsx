import './App.css'
import { ToastContainer } from 'react-toastify';
import Router from './router/Router';
function App() {
  return (
    // <AuthProvider>
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router />
    </>

    // </AuthProvider >
  )
}

export default App
