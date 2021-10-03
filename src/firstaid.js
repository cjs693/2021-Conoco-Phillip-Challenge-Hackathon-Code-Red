import React, {PureComponent} from 'react';
import { useState, useEffect } from "react";

import {ScatterChart, Scatter,
  BarChart,LineChart,Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


function FirstAid() {
    
  const [FirstAid,setEmployees]=useState([]);
    useEffect(()=> {
      fetch("./updateddb.json")
        .then(res => res.json())
        .then(
          (result) => {
            setEmployees(result);
          }
        );
    });

    
  const [Second,setSecond]=useState([]);
  useEffect(()=> {
    fetch("./2nd.json")
      .then(sec => sec.json())
      .then(
        (second) => {
          setSecond(second);
        }
      );
  });

      return (
        <div>
          <h2>DASHBOARD</h2>

          <BarChart
        width={1000}
        height={300}
        data={FirstAid}
        margin={{
          top: 10, right: 20, left: 40, bottom: 10,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"id"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Date"  fill="#8884d8" />
        <Bar dataKey="Age"   stackId="c" fill="#00C49F" />
        <Bar dataKey="Gender"   />
        <Bar dataKey="Location" />
      </BarChart>
          
          <br/><br/><br/>
        
        
          <LineChart
            
            width={1000}
            height={300}
            data={Second}
            margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
          >
            <XAxis dataKey={"Month"} />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="Number" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="Minor" stroke="#8884d8" yAxisId={0} />
            <Line type="monotone" dataKey="Serious" stroke="#00C49F" yAxisId={0} />
            <Line type="monotone" dataKey="Deadly" yAxisId={0} />
          </LineChart>

            
          <br/><br/><br/>
          <br/><br/><br/>

          <table>
            <thead>
              <tr>
                <th>Incident ID</th>
                <th>Date</th>
                <th>Employee_ID</th>
                <th>Location</th>
                <th>Injury Severity</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
            {FirstAid.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.Date}</td>
                <td>{emp.Employee_ID}</td>
                <td>{emp.Location}</td>
                <td>{emp.Injury}</td>
                <td>{emp.Age}</td>
                <td>{emp.Gender}</td>
                </tr>
            ))}
            </tbody>
          </table>
          
          

        </div>
        );
}

export default FirstAid