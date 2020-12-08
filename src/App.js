import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Inputs from './components/input/index.jsx'
import UnControlledForm from './components/uncontrolled_form/index'
import ControlledForm from './components/controlled_form/index.jsx'

const App = () => {
  return (
    <div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-header">
                  <h5 className="text-center">Working with form</h5>
                </div>
                <div className="card-body">
                    {/* <Inputs /> */}
                    <ControlledForm />
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default App;