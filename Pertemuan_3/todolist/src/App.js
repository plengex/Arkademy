import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    
  }

  state = {
    data: [
      {
        "id": 1,
        "todo": "Menyapu Lantai",
        "isCompleted": true
      },
      {
        "id": 2,
        "todo": "Menyiram Bunga",
        "isCompleted": false
      }
    ],
    inputan: ""
  }

  onDelete = (event, index) => {
    event.preventDefault();
    this.state.data.splice(index, 1);
    this.forceUpdate();
  }

  onAddTodo = (event) => {
    event.preventDefault();
    
    const body = {
      "id" : this.state.data.length + 1,
      "todo" : this.state.inputan,
      "isCompleted" : false
    }

    this.state.data.push(body);
    this.forceUpdate();
    this.setState({inputan: ""});
  }
  
  render(){
    return(
      <div className="container">
        <table>
          <tr>
            <th>Nomor</th>
            <th>Nama Perintah</th>
            <th>Apakah Selesai ?</th>
            <th>Aksi</th>
          </tr>
          {/* eslint-disable-next-line array-callback-return */}
          {this.state.data.map((item, index) => {
          let isCompleted = item.isCompleted ? 'Sudah selesai' : 'Belum selesai';
  
          if (item.id < 10){
            return(
              <tr>
                <td>{index + 1}</td>
                <td>{item.todo}</td>
                <td>{isCompleted}</td>
                <td>
                  <p>
                    <input
                    onClick={(event) => {this.onDelete(event, index)}}
                    type="submit" value="hapus"/>
                  </p>
                </td>
              </tr>
            )
          }
        })}
              <tr>
                <td></td>
                <td>
                  <input
                    type="text" 
                    placeholder="Tambahkan Kegiatan"
                    value={this.state.inputan}
                    onChange={(event) => {this.setState({inputan: event.target.value})}} />
                </td>
                <td></td>
                <td>
                  <p>
                    <input 
                    onClick={(event) => {this.onAddTodo(event)}} 
                    type="submit" 
                    value="tambah"/>
                  </p>
                </td>
              </tr>

        </table>
      </div>
    )
  }
}

export default App;
