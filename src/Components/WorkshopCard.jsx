import '../Styles/workshops.css';
import Pic from "../assets/python.jpg"

export default function WorkshopCard(props) {
    return (
        <div className="workshop-card">
            <div className='workshop-information'>
                <h1>Python Analytics 101 - Loading Data & Basic Data Visualization</h1>
                <p> Participants will gain hands-on experience loading and exploring data using Python. They will learn to use Pandas to read and manipulate datasets, generate summary statistics, and create basic visualizations using Matplotlib. The session will introduce scatter plots, line graphs, and bar charts to help identify trends in emissions and weather data. By the end, participants will have the skills needed to analyze their data before applying machine learning techniques.</p>
                <p>Presenter: Gabriel Gaytan III</p>
                <p>Date: 3/6/2025</p>
                <button className='workshop-rsvp-button'>RSVP</button>
            </div>
            <div className='workshop-image'>
                <img src={Pic}></img>
            </div>

        </div>
    )
}