import React from 'react'
import './signup.css'

const signin = () => {
    return (
        <div>
            <div className="signup_container">
                <img 
                src="https://i.pinimg.com/originals/b7/54/cf/b754cf526777e2b658954b545e918d44.jpg"
                      alt="students" />
                <form action="" class="form-group">
                    <h1>SignIn</h1>
                    <input type="text" class="input-field" id="name" placeholder="User Name" />

                    <input type="password" class="input-field" placeholder="Password" />

                    <button type="submit" class="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default signin;