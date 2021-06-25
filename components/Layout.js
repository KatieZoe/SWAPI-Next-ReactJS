import Nav from './Nav';
import Header from './Header';
import styles from '../styles/Layout.module.css';


const Layout = ({ children }) => {
  return(
    <>
    <Nav />
    <div className={ styles.container }>
      <section class="galaxy-header">
        <div className="galaxy">
             <div className="stars"></div>
         </div>
        <main className={ styles.main }>
          <Header />
          { children  }
        </main>
      </section>
    </div>
    </>
  )
}
export default Layout
