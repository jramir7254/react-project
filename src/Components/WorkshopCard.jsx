import '../Styles/workshops.css';
import Pic from "../assets/python.jpg"

export default function WorkshopCard(props) {
    return (
        <div key={props.key} className="workshop-card">
            <div className='workshop-information'>
                <h1>{props.name}</h1>
                <p> {props.description}</p>
                <p>Presenter: {props.presenter}</p>
                <p>Date: {props.date}</p>
                <button className='workshop-rsvp-button'>RSVP</button>
            </div>
            <div className='workshop-image'>
                <img src={Pic}></img>
            </div>

        </div>
    )
}