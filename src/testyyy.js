import React from 'react';
import ReactDOM from 'react-dom';
class CV extends React.Component{
    render(){
        return <div>Działa</div>
    }
}


document.addEventListener('DOMContentLoaded',function{
ReactDOM.render(<CV/>, document.getElementById('begin'))
});


/*<form>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label className="form-check-label" htmlFor="gridRadios1">
            First radio
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label className="form-check-label" htmlFor="gridRadios2">
            Second radio
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label className="form-check-label" htmlFor="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div className="form-group row">
    <div className="col-sm-2">Checkbox</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1">
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>*/



// /*function validate(email, password) {
//     // true means invalid, so our conditions got reversed
//     return {
//         email: email.length === 0,
//         password: password.length === 0,
//     };
// }
//
// class SignUpForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: '',
//             password: '',
//
//             everFocusedEmail: false,
//             everFocusedPassword: false,
//             inFocus: '',
//         };
//     }
//
//     handleEmailChange = (evt) => {
//         this.setState({ email: evt.target.value });
//     }
//
//     handlePasswordChange = (evt) => {
//         this.setState({ password: evt.target.value });
//     }
//
//     handleSubmit = (evt) => {
//         if (!this.canBeSubmitted()) {
//             evt.preventDefault();
//             return;
//         }
//         const { email, password } = this.state;
//         alert(`Signed up with email: ${email} password: ${password}`);
//     }
//
//     canBeSubmitted() {
//         const errors = validate(this.state.email, this.state.password);
//         const isDisabled = Object.keys(errors).some(x => errors[x]);
//         return !isDisabled;
//     }
//
//     render() {
//         const errors = validate(this.state.email, this.state.password);
//         const isDisabled = Object.keys(errors).some(x => errors[x]);
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     className={errors.email ? "error" : ""}
//                     type="text"
//                     placeholder="Enter email"
//                     value={this.state.email}
//                     onChange={this.handleEmailChange}
//                 />
//                 <input
//                     className={errors.password ? "error" : ""}
//                     type="password"
//                     placeholder="Enter password"
//                     value={this.state.password}
//                     onChange={this.handlePasswordChange}
//                 />
//                 <button disabled={isDisabled}>Sign up</button>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<SignUpForm />, document.body);*/
//
// /*prosta animacja
//
// import React from "react";
//
// const styles = {
//     transition: 'all 1s ease-out'
// };
//
// export class Main extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             opacity: 1,
//             scale: 1
//         };
//     }
//
//     onHide() {
//         this.setState({
//             opacity: 0
//         });
//     }
//
//     onScale() {
//         this.setState({
//             scale: this.state.scale > 1 ? 1 : 1.3
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <nav>
//                     <div className="nav-wrapper orange darken-2">
//                         <ul className="left">
//                             <li className="active"><a href="#">TRANSITIONS</a></li>
//                             <li><a href="#">ANIMATIONS</a></li>
//                             <li><a href="#">REACTJS + CSS TRANSITIONS</a></li>
//                             <li><a href="#">REACTJS + CSS ANIMATIONS</a></li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <div className="container">
//                     <div className="row">
//                         <div className="s12">
//
//                         </div>
//                     </div>
//
//                     <div className="row">
//                         <div className="s8 offset-s2 center-align">
//                             <div className="card deep-purple z-depth-2"
//                                  style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>
//                                 <div className="card-content white-text">
//                                     <span className="card-title">Awesome Animations!</span>
//                                     <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
//                                 </div>
//                                 <div className="card-action">
//                                     <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>HIDE</a>
//                                     <a onClick={this.onScale.bind(this)} style={{cursor: 'pointer'}}>SCALE</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         );
//     }
// }*/
//
//
// const CSSTransitionGroup = React.addons.CSSTransitionGroup;
// const TransitionGroup = React.addons.TransitionGroup;
//
// class Example extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = { visible: false };
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick() {
//         this.setState({ visible: ! this.state.visible });
//     }
//
//     render() {
//         return <div>
//             <button onClick={this.handleClick}>{this.state.visible ? 'Slide up' : 'Slide down'}</button>
//             <CSSTransitionGroup transitionName="example">
//                 { this.state.visible ? <div className='panel' /> : null }
//             </CSSTransitionGroup>
//         </div>
//     }
// }
//
// React.render(<Example />, document.getElementById('container'));
//
// .panel {
//     width: 200px;
//     height: 100px;
//     background: green;
//     margin-top: 10px;
// }
//
// .example-enter {
//     height: 0px;
// }
//
// .example-enter.example-enter-active {
//     height: 100px;
//     -webkit-transition: height .3s ease;
// }
//
// .example-leave.example-leave-active {
//     height: 0px;
//     -webkit-transition: height .3s ease;
// }
//
//
