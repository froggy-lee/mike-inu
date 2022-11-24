import Header from '/src/components/Layout/Header'
import Footer from '/src/components/Layout/Footer'
import ModalPage from '/src/modules/ModalPage'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <ModalPage />
      <div> {children} </div>
      <Footer />
    </div>
  )
}

export default Layout
