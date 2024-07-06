import React from "react";

function Card() {

    return (
        <div className="container-flex p-5">
            <div className="card-group">
                <div className="card style=max-width: 18rem">
                    <img src="https://picsum.photos/id/1/200/300" className="card-img-top" alt="aleatorio"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
                {/*  <div className="card-footer">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </div> */}
                {/* <div className="card">
                    <img src="https://picsum.photos/id/1/200/300" className="card-img-top" alt="aleatorio2"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                    </p>
                    </div>
                    <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div> */}
                {/* <div className="card">
                    <img src="https://picsum.photos/id/1/200/300" className="card-img-top" alt="aleatorio3"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                                </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                </div */}
            </div>
        </div>
    )
}

export default Card;