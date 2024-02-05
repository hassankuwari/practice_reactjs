import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const Home = () => {

  const [humanData, setHumanData] = useState([]);

  const getHuman = () => {
    axios.get(`https://dummyjson.com/users`).then((response) => {
      console.log("fetch human data", response.data.users);
      setHumanData(response.data.users);
    })
  }

  const columns = [
    {
      name: 'ID',
      selector: row => <Link to={`/about/${row.id}`}>{row.id}</Link>,
    },
    {
      name: 'First Name',
      selector: row => row.firstName,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
    },
    {
      name: 'Age',
      selector: row => row.age,
    },
  ];


  useEffect(() => {
    getHuman()
  }, [])

  return (
    <div>
      <DataTable
        columns={columns}
        data={humanData}
      />
    </div>
  )
}

export default Home
