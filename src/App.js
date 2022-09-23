import './App.css';

const App = () => {

  const title = 'Welcome to Dog Care Tips';
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{ 10 }</p>
      </div>
    </div>
  );
}

export default App;
