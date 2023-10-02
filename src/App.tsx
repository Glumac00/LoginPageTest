import "./styles/styles.scss"

function App() {
  

  return (
    <>
      <div>
        <body>
          <div className="wrapper">
            <form action="">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required/>
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="Password" placeholder="Password" required/>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="remember-forget">
                <label><input type="checkbox"/>Remember me!</label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="btn">Login</button>

              <div className="register-link">
                <p>Don't have an acount?      <a href="#">Register now!</a></p>
              </div>
            </form>
          </div>
        </body>
      </div>
    </>
  )
}

export default App
