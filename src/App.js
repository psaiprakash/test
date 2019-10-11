import React, { Component } from 'react';

class App extends Component {
 
    state = {
      data : [],
      firstName :''
  }

  componentDidMount() {
     fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(data => {
      console.log('data=>>>>>>>', data.data)
      this.setState({data: data.data});
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleEdit = (id) => {
    const { data } = this.state;
    const index = data.findIndex(x => x.id === id)
    console.log(index)
    // this.first_name.focus(index);
    const updatedData = [...data.slice(0,index),{...data[index],first_name: 'edited', last_name: 'pankaj'}, ...data.slice(index+1)];
    console.log('updatedData: ', updatedData);
    this.setState({ data: updatedData});
  } 

  handleUpdate = (id) => {
    console.log(id)
  }
  
  handleDelete = (id) => {
    console.log(id)
    const { data } = this.state;
    const updatedData = data.filter(x => x.id !== id)
    this.setState({data : updatedData});
  }
 
  render() {
    console.log(this.state.firstName)
    const { data } = this.state
    return (
      <div>
        <header>
          hi sai
        </header>
        <table>
          <thead>
            <tr>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map(item => (
                <tr key={`Key-${item.id}`}>
                <td  contentEditable ref={(index) => {this.first_name = index}} value={this.state.firstName} onChange={this.handleChange} >{item.first_name}</td>
                <td>{item.last_name}</td>
                <input type='button' name='edit' value='Edit' onClick={() => {this.first_name.focus();}}/> 
                <input type='button' name='update' value='Update' onClick={() => this.handleUpdate(item.id)}/>
                <input type='button' name='delete' value='Delete' onClick={() => this.handleDelete(item.id)}/>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;