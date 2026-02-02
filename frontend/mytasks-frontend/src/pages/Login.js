function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" style={{ padding: "8px", width: "100%" }} />
      <br /><br />
      <input type="password" placeholder="Password" style={{ padding: "8px", width: "100%" }} />
      <br /><br />
      <button style={{ padding: "8px", width: "100%" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
