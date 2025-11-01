import React , {useState} from 'react'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');

  const regex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  function handleSubmit(e) {
    e.preventDefault();
    if (!regex.test(password)) {
      setError("error")
    } else if (password.length < 10) {
      setError("error");
    }
      else {
        alert("true");
        
      }
  

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div>{error}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="ConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="ConfirmPassword"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          {repassword !== password && error == "" ? <p>password isnt true</p>: ""}
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="Checkbox" />
          <label className="form-check-label" htmlFor="Checkbox">
            I agree to the terms and conditions
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
