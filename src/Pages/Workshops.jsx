import '../Styles/workshops.css';
import WorkshopCard from '../Components/WorkshopCard';
import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';

export default function Workshops() {
    return (
        <section className='workshops'>
            <h1>Workshops</h1>
            <ExcelData ></ExcelData>
        </section>
    );
}

const ExcelData = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch the XLSX file from the public folder
      fetch('./data.xlsx')
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          // Read the XLSX file as an ArrayBuffer
          const workbook = XLSX.read(buffer, { type: 'array' });
          // Get the first sheet name
          const worksheetName = workbook.SheetNames[0];
          // Get the worksheet
          const worksheet = workbook.Sheets[worksheetName];
          // Convert the worksheet to JSON
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setData(jsonData);
        })
        .catch((error) => console.error('Error reading the XLSX file:', error));
    }, []);
    
    return (
        <div className='workshops-container'>
          {
            data.map((row, index) => (
                <WorkshopCard key={index} name={row.name} date={new Date(Math.round((row.date - 25568) * 86400 * 1000)).toLocaleDateString()} presenter={row.presenter} description={row.description}></WorkshopCard>
            ))
          }
        </div>
    );
}