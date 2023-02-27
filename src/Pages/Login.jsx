import React from 'react'
import { Link } from 'react-router-dom';
import authService from '../services/auth.service'

const Login = () => {
    const HandleSigninButton = (e) => {
        e.preventDefault();
        const data = {
            username:"chintanuser",
            password:"chintan123"
        }
        console.log("firstcall")
        authService.login(data).then((response) => {
            console.log(response, "response")
        }).catch((e) => {
            console.log(e.response.data.message)
        })
    }
  return (
    <>      
      <section className="signup_section form_section">
        <div className="form_main">
            <h2 className="title">Login</h2>
            <form action="" className="form-box">
                <div className="form-inner">
                    <div className="form-title">
                        <h3>Sign in </h3>
                    </div>
                    <div className="login_via">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className='bx bxl-google'></i>
                                    Google
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bx bxl-facebook'></i>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{"fill": "#fff"}}><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-inputs">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username or Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Password" />
                        </div>
                        <div className="radio">
                            <input id="radio-1" name="radio" type="radio" />
                            <label forhtml="radio-1" className="radio-label">
                                <span>
                                    Remember Me
                                </span>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg px-4 me-md-2" onClick={HandleSigninButton}>Sign in</button>
                    <div className="have_account">
                    Don’t have an account? <Link to="/register"> Register Now </Link>
                    </div>
                </div>
            </form>
        </div>
      </section>
    </>
  )
}

export default Login