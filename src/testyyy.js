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
