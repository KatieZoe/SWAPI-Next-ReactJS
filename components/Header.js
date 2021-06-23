import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return(
    <div>
      <h1 className={ headerStyles.title }>
      <span>Starwars</span> Fansite
      </h1>
        <p className={ headerStyles.description }>
        “The Force will be with you. Always.” <br/>- Obi-Wan Kenobi
      </p>
    </div>
  )
}
export default Header
