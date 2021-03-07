import { Component } from 'react';
import './Form.css';


class form extends Component {

    constructor(props){
        super(props);
        this.state = {
            // Data from parent
            RouteChange: this.props.onRouteChange
        }
    }

    componentDidMount(){
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });
    }

    render(){
        const {RouteChange} = this.state;

        return (
            <div className='main_container'>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        
                        <input type="text" placeholder="Name" />
                        <br/>
                        <input type="email" placeholder="Email" />
                        <br/>
                        <input type="password" placeholder="Password" />
                        <br/>
                        <button onClick={() => RouteChange('home')}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email" />
                        <br/>
                        <input type="password" placeholder="Password" />
                        <br/>
                        <button onClick={() => RouteChange('home')}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>If you already have an account:</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hey there!</h1>
                            <p>Don't have an account? No probs: </p>
                            <button className="ghost" id="signUp">Sign Up</button>
                            <br/><br/>
                            <hr/>
                            <br/>
                            <p>Skip the sign-in if you'd just like to try out the app.</p>
                            <button onClick={() => RouteChange('home')} className="ghost">Guest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default form;