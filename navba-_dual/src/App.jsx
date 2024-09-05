
function App() {
 

  return (
  
     <nav className="navbar">
      <div className="navbar-content">
        <img src="logo1.png" alt="logo" className="navbar-logo"/>
         <ul className="navbar-list">
          <li><a href="#comida">Comida fav</a></li> 
          <li><a href="#musica">Gustos musicales</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
        </ul>
        <div className="navbar-actions">
          <div className="navar-search">
            <input type="text" placeholder="Buscar..."/>
          </div>
          <div className="navbar-buttons">
            <button className="login-btn">Iniciar sesion</button>
            <button className="register-btn">Registrarse</button>
          </div>
        </div>
      </div>
     </nav>
     
  )
}

export default App
