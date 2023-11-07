import React from 'react';
import Order from "./Order";

function Footer(props) {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <div>
            <footer className="footer">
                {isOpen ? (
                    <Order closeHour={closeHour} openHour={openHour}/>
                ) : (
                    <p>
                        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
                )}
            </footer>
        </div>
    );
}

export default Footer;