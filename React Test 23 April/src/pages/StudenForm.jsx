import React, { useState } from 'react';

function StudentForm() {
  const [data, setData] = useState({
    rollno: '',
    name: '',
    phy: '',
    che: '',
    math: '',
    eng: '',
    hindi: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phy = parseInt(data.phy);
    const che = parseInt(data.che);
    const math = parseInt(data.math);
    const eng = parseInt(data.eng);
    const hindi = parseInt(data.hindi);

    const total = phy + che + math + eng + hindi;
    const percent = (total / 500) * 100;

    let division = '';
    if (percent >= 60) division = 'First Division';
    else if (percent >= 45) division = 'Second Division';
    else if (percent >= 33) division = 'Third Division';
    else division = 'Fail';

    setResult({
      total,
      percent: percent.toFixed(2),
      division
    });
  };

  return (
    <div>
      <h3>Student Result Form</h3>
      <form onSubmit={handleSubmit}>
        <input name="rollno" placeholder="Roll No" onChange={handleChange} /><br />
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="phy" placeholder="Physics" onChange={handleChange} /><br />
        <input name="che" placeholder="Chemistry" onChange={handleChange} /><br />
        <input name="math" placeholder="Math" onChange={handleChange} /><br />
        <input name="eng" placeholder="English" onChange={handleChange} /><br />
        <input name="hindi" placeholder="Hindi" onChange={handleChange} /><br />
        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
          <p>Total Marks: {result.total}</p>
          <p>Percentage: {result.percent}%</p>
          <p>Division: {result.division}</p>
        </div>
      )}
    </div>
  );
}

export default StudentForm;
