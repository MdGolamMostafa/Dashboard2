import './App.css';
import Dashboard2 from './components/Dashboard/Dashboard2';

function App() {
  
  const showDate = new Date();
  const display = showDate.toDateString();

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  return (
    <div  >
      <h4>Dashboard 2</h4>
      <small>{display} {formatAMPM(new Date())}</small>
      <Dashboard2/>
    </div>
  );
}

export default App;
