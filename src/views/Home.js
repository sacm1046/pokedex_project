import React from 'react';

const Home = props => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 bg-danger rounded-lg">
                    <div id="indicators" className="row">
                        <div className="col-3 text-center">
                            <button className="btn btn-primary rounded-circle principal_indicator my-2"></button>
                        </div>
                        <div className="col-3">
                            <button className="small_indicator bg-danger"></button>
                            <button className="small_indicator bg-warning"></button>
                            <button className="small_indicator bg-success"></button>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <div id="screen" className="row py-4">
                        <div className="col-1"></div>
                        <div className="col-10 bg-white p-4 rounded-lg">
                            <div className="black_screen bg-dark rounded-lg text-white p-2">
                                pokemon
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div id="buttons"  className="row py-4">
                        <div className="col-2">
                            <button className="btn btn-dark rounded-circle black_button mx-auto"></button>
                        </div>
                        <div className="col-6">
                            <div className="topbuttons d-flex justify-content-around">
                                <div className="topbuttons-item bg-danger"></div>
                                <div className="topbuttons-item bg-primary"></div>
                            </div>
                            <div className="littlescreen mt-3 mx-auto p-1">
                                info
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-5"></div>
                                <div className="col-2 cross bg-dark text-dark">a</div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-3 cross bg-dark text-dark">a</div>
                                <div className="col-4 cross bg-dark text-dark">a</div>
                            </div>
                            <div className="row">
                                <div className="col-5"></div>
                                <div className="col-2 cross bg-dark text-dark">a</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    )
}
export default Home;