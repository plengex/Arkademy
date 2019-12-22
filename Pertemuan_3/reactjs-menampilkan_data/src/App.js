import React from 'react';
import './App.css';
import loading from './loading.svg';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  state = {
    data: []
  }

  fetchData = () => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render(){
    return(
      <div className="container">
        <img src={loading} className="App-logo" alt="logo" />
        <table>
          <tr>
            <th>Nomor</th>
            <th>Nama Karyawan</th>
            <th>Umur</th>
            <th>Gaji</th>
          </tr>
          {this.state.data.slice(0, 20).map((item, index) => {
          // let isCompleted = item.completed ? "Sudah selesai" : "Belum selesai";
  
          // if (index < 10){
            return(
              <tr>
                <td>{index + 1}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_age}</td>
                <td>{item.employee_salary}</td>
              </tr>
            )
          // }
        })}

        </table>
      </div>
    )
  }
}

export default App;
