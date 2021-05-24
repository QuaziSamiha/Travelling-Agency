import React from 'react';

const Transport = (props) => {
    // console.log(props);
    const {title, imgURL, transportType, ticketPrice} = props.transport;
    console.log(ticketPrice);
    return (
        <div className="card mx-2 p-2 bg-dark" style={{width: '18rem'}}>
            <img src={imgURL} className="card-img-top border m-1 p-2" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Per Ticket: {ticketPrice}</p>
                <input className='' type="date" name="travel-date" id="" /> <br /> <br />
                <button className="btn btn-info">Buy Ticket</button>
            </div>
        </div>
    );
};

export default Transport;