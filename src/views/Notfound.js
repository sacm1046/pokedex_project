import React from 'react';

const NotFound = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    {/* Este es el contenedor de indicadores superiores */}
                    <div className="row indicadores">
                        <div className="col-3"></div>
                        <div className="col-3"></div>
                        <div className="col-6"></div>
                    </div>

                    <div className="row pantalla"></div>
                    <div className="row botones"></div>
                </div>
                    
            </div>
        </div>
    )
}

export default NotFound;