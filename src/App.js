import './App.css';
import users from './users';
import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [search, setSearch] = useState("");
  const allusers = users;

  return (
    <>
      <div className='container'>
        <h1>Usuarios</h1>
        <input className="form-control" type="text" onChange={e => { setSearch(e.target.value) }} placeholder="Search" />
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Departmet</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {
              allusers.filter(user => {
                if (search === "") return user;
                else if (user.name.toLowerCase().includes(search.toLowerCase()))
                  return user
              }).map(user => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.dept}</td>
                    <td>{user.phone}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
