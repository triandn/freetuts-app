import React from "react";
import Welcome from "./components/Welcome";
import Clothes from "./components/Clothes";

// function App(props) {
//   return (
//     <div>
//       <Welcome name="Nguyễn Văn A" />
//       <Clothes name="quan jean" type="Skinny" color="den" size="L" >Clothes 1</Clothes>
//       <Clothes name="ao thun" type="Ao thun nam" color="do" size="M">Clothes 2</Clothes>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    // khoi tao state
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="container" style={{ paddingTop: "5%" }}>
        <form onSubmit={e => { this.submitForm(e) }}>
          <div className="form-group">
            <label htmlFor="text">Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={e => this.changeInputValue(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              onChange={e => this.changeInputValue(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  validationForm() {
    let returnData = {
      error: false,
      msg: ''
    }
    const { email, password } = this.state;
    //kiem tra email
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      returnData = {
        error: true,
        msg: 'Email không hợp lệ'
      }
    }
    //kiem tra password
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: 'Mat khau phai lon hon 8 ky tu'
      }
    }
    return returnData;
  }
  changInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm(e) {
    // chan cac event mac dinh cua form 
    e.preventDefault();
    // goi ham validationForm de kiem tra qua form 
    const validation = this.validationForm();
    // Kiem tra loi input trong form va hien thi
    if (validation.error) {
      alert(validation.msg);
    }
    else {
      alert('Dang nhap thanh cong');
    }
  }
}
export default App;
