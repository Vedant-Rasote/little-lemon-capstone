import React from 'react'
import reserveTableBg from '../images/reserve_table_bg.png';
import { Link } from 'react-router-dom';

const ReserveTable = () => {
    return (
        <section className='mx-auto border-top border-bottom mb-3 glass_morph' id="reserve_table_section" style={{ backgroundImage: `url(${reserveTableBg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <h3 className="my-4 text-center">Reserve a Table</h3>
            <p className='text-center'>To help us find the best table for you, select the preferred party size, date and time of your reservation.</p>
            <form className="row g-3">
                <div className="col-md-4">
                    <label for="party_size" className="form-label">Party Size</label>
                    <input type="number" className="form-control" id="party_size" />
                </div>
                <div className="col-md-4">
                    <label for="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="time" />
                </div>
                <div className="col-md-4">
                    <label for="time" className="form-label">Time</label>
                    <input type="time" className="form-control" id="time" />
                </div>
                <div className="col-12 text-center">
                    <Link className="btn btn-dark rounded-pill mb-3" to="/table_reservation_details">Find a Table</Link>
                </div>
            </form>
        </section>
    )
}

export default ReserveTable