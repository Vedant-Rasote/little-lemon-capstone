import React from "react";
import reserveTableBg from "../images/reserve_table_bg.png";
import { Link } from "react-router-dom";

const BookingSection = () => {
  return (
    <section
      className="mx-auto border-top border-bottom mb-3 glass_morph text-center"
      id="reserve_table_section"
      style={{
        backgroundImage: `url(${reserveTableBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      aria-labelledby="reserve_table_heading"
    >
      <h3 id="reserve_table_heading" className="my-4">Welcome to Little Lemon</h3>
      <p><em> · Dine In · Takeaway · Delivery · </em>Your perfect dining experience awaits! Reserve a table now and savor the flavors from One of Chicago's best Italian kitchens inspired by Mediterranean flavors.</p>
      <Link to='/booking'>
        <button type="button" className="btn btn-warning rounded-pill mb-4" aria-label="Reserve a Table">Reserve Table</button>
      </Link>
    </section>
  );
};

export default BookingSection;
