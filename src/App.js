import React from 'react';
import Button from 'react-bootstrap/Button';
import { Modalpopup } from './common/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './styles/css/all.css'
// import './styles/sass/all.scss'
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      {/* modal-start */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Mark Now
      </Button>

      <Modalpopup
        show={modalShow}
        onHide={() => setModalShow(false)}
        title='Add Event'
      />
    </div>
  );
}

export default App;
