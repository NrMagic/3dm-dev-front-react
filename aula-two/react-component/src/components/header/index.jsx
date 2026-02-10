import Lampada from "../../assets/img/lampada.jpeg"
function Header(params) {

    let hearderStyle = {

        heigth:'50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f0f0f0f0',
        color: 'black',
        border:'solid 1px black',
    }
    

    return(

    <header style={hearderStyle}>
        <img src={Lampada} alt="WmSite" />

      <nav className="Links">
      <a href="/">Clique aqui</a>
      <a href="./">Ou aqui</a>
      </nav>

      <div className="buttonWrapper">
        <button>sing in</button>
        <button>sing out</button> 
      </div>
    </header>
    )
    
}
export default Header