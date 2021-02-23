import React from 'react'
import Popup from 'reactjs-popup';
function Single(prop) {
    //alert(bookurl)
    return (
        <div>
        <section
            style={{
            background: `url(${prop.car})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            }}
            id="SingleHomeOrCar"
        >
            <div id="ContentWrapper">
            <div id="Desc">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                {prop.title}
                </h2>
                <p data-aos="fade-in">
                {prop.desc}
                <span>{prop.descLink}</span>
                </p>
                </div>
                <div id="Buttons">
                <button data-aos="fade-right" data-aos-duration="900"><a href="/payment?id=1&price=5000">{prop.fButton}</a></button>
                <Popup trigger={<button data-aos="fade-right" data-aos-duration="900">{prop.sButton}</button>} modal nested>
                {close => (
                        
                        <div className="bg-gray-800 text-white mx-52 h-auto p-10  justify-center items-center self-center">
                            <button className="close float-right -m-10 -mr-0.5  text-5xl" onClick={close}>
                            &times;
                            </button>
                            <div className="header"> Modal Title </div>
                            <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                            <div className="actions">
                            {/* <button
                                className="button"
                                onClick={() => {
                                console.log('modal closed ');
                                close();
                                }}
                            >
                                close modal
                            </button> */}
                            </div>
                        </div>
                        )}
                </Popup>
    {/*             <button
                style={{ display: 'block' }}
                data-aos="fade-left"
                data-aos-duration="900"
                >
                {prop.sButton}
                </button> */}
            </div>
            </div>
        </section>
        </div>
    )
}

export default Single