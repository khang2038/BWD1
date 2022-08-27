import React from 'react'
import Cards from './Cards/Cards'
import Table from './Table/Table'
import './cpn_pf_statistic.css'

const Cpn_pf_statistic = () => {
  return (
    <div className="MainDash" style={{margin : '30px'}}>
      <h1 style={{marginBottom : '30px'}}>Dashboard</h1>
      <Cards />
      <Table />
      </div>
  )
}

export default Cpn_pf_statistic