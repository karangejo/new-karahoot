import {Component} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import axios from 'axios';



class Login extends Component {
        state =
                {
                  email:'',
                  name:'',
                  userID: '',
                  loggedIn: false
                }

        notLoggedIn(){
          return(
            <div>
              <GoogleLogin
              clientId="687641367817-phvujd6f7h6cs69sobr0hbjkme4kodt1.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
              />
            </div>
          );
        }

        loggedIn(){
          return(
            <div>
             <GoogleLogout
               clientId="687641367817-phvujd6f7h6cs69sobr0hbjkme4kodt1.apps.googleusercontent.com"
               buttonText="Logout"
               onLogoutSuccess={this.logout}
             >
             </GoogleLogout>
            </div>
          );
        }

        checkLogin(){
          if(this.state.loggedIn){
            return this.loggedIn();
          }
          return this.notLoggedIn();
        }

        responseGoogle = (response) => {
          console.log(response);
          this.setState({email: response.profileObj.email, name: response.profileObj.name, loggedIn: true});
          // check if the user is in the database if not then add a new user
          const baseURL = 'http://localhost:3001/users/?email='
          const queryURL = baseURL + this.state.email;
          console.log(queryURL);
          //first check if user is in the database
          axios.get(queryURL)
                    .then((res) => {
                      console.log(res);
                      console.log(res.data.length);
                      // if user is not in the database
                      if(res.data.length === 0){
                        //save user to database
                        console.log("saving user to database");
                        const postURL = baseURL + this.state.email +'&name=' + this.state.name
                        console.log(postURL);
                        axios.post(postURL)
                          .then((res) => {
                            console.log(res);
                            console.log("saved user to database");
                            this.setState({userID: res.data._id});
                          })
                          .catch((err) => {
                            console.log(err);
                          })
                      } else {
                        console.log("already in database");
                        this.setState({userID: res.data[0]._id});
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
        }

        logout = (response) => {
          console.log(response);
          this.setState({userID: '', email: '', name: '', loggedIn: false});
        }

        render(){





                return(
                        <div>
                                  {this.checkLogin()}
                        </div>
                );
        };
}

export default Login;
