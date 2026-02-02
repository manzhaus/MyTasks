import Tasks from "./pages/Tasks";

function App() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "50px auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>MyTasks</h1>
      <Tasks />
    </div>
  );
}

export default App;
