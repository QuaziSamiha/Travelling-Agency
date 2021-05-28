import React from 'react';
import { useHistory } from 'react-router';

const Transport = (props) => {

    const {title, imgURL, transportType, ticketPrice} = props.transport;
    
    const history = useHistory();
    const handleBuyTicket = (type) => {
        history.push(`/ticket-buy/${type}`)
    }

    return (
        <div className="card mx-2 p-2 bg-dark" style={{width: '18rem'}}>
            <img src={imgURL} className="card-img-top border m-1 p-2" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Per Ticket: {ticketPrice}</p>
                <input style={{width:'145px'}} type="date" name="travel-date" id="" /> <br /> <br />
                <button onClick={() => handleBuyTicket(transportType)} className="btn btn-info">Buy Ticket</button>
            </div>
        </div>
    );
};

export default Transport;