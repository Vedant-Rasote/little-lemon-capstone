import React from 'react'

const Contact = () => {
    return (
        <section id='contact'>
            <h3 className="mb-4 text-center">Contact Us</h3>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-md-0">
                    <p className='text-center'>We would love to hear from you! Drop us a line and we'll get back to you</p>
                    <form className="row g-3">
                        <div className="col-12">
                            <label for="full_name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="full_name" placeholder="ex. John Doe" />
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="ex. johndoe@email.com" />
                        </div>
                        <div className="col-md-6">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" id="phone" placeholder="ex. 99999 88888" required />
                        </div>
                        <div className="col-12">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-dark rounded-pill" >Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 mb-3 mb-md-0">
                    <iframe
                        title="Chicago City Map"
                        width="100%"
                        height="330"
                        className="border rounded-1"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.657849547131!2d-87.62979808456044!3d41.878113979218606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0x24f7c8a2bf18962e!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1632719534646!5m2!1sen!2sus"
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    ></iframe>
                    <p className='text-center'>123 Lemon Grove<br /> Chicago, IL 60601</p>
                </div>
            </div>
        </section>
    )
}

export default Contact