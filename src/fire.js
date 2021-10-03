import React from 'react';
import './fire.css';
import { useFormik } from 'formik';





function Firefight() {
  const formik = useFormik({
    initialValues: {
      Employee_id: '',
      Date:  '',
      Location: '',
      Time: '',
      Injury:'',
      Gender:'',
      Age:''
    },
    
    onSubmit: values => {
      formik.resetForm();
      alert(JSON.stringify("Thank you, incident for " + values.Employee_id + " has been recorded."));
    }
  });

  return (
    <div>
    <h2>Enter Employee Details...</h2>
    <form onSubmit={formik.handleSubmit} className="EmplyeeForm">
      <p>
      <label htmlFor="Employee_id">*Employee ID</label>
      <input
        id="Employee_id"
        name="Employee_id"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Employee_id}
        type ="number"
        placeholder="Enter Emplyee Id"
        required
      />
      </p>
      <p>
      <label htmlFor="Date">*Incident Date </label>
      <input
        id="Date"
        name="Date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Date}
        type ="date"
        required
      />
      </p>
      <p>
      <label htmlFor="Location">*Incident Location </label>
      <input
        id="Location"
        name="Location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Location}
        placeholder="Enter Location"
        required
      />
      </p>
      <p>
      <label htmlFor="Time">*Incident Time </label>
      <input
        id="Time"
        name="Time"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Time}
        type ="time"
        required
      />
      </p>
      <p>
      <label htmlFor="Injury">*Incident Injury </label>
      <select name="Injury" id="Injury">
        <option value="Minor">Minor</option>
        <option value="Serious">Serious</option>
        <option value="Deadly">deadly</option>
        onChange={formik.handleChange}
        value={formik.values.Injury}
        required
      </select>
      </p>
      <p>
      <label htmlFor="Gender">*Injured Gender </label>
      <input
        id="Gender"
        name="Gender"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Gender}
        required
      />
      </p>
      <p>
      <label htmlFor="Age">*Injured Age </label>
      <input
        id="Age"
        name="Age"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Age}
        type = "number"
        placeholder="Enter Age"
        required
      />
      </p>
      <button type="submit">Submit</button>
    </form>
    </div>
  );

}
export default Firefight