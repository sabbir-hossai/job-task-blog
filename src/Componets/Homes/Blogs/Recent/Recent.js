import React from 'react';
import './Recent.css';

const Recent = (props) => {
    console.log(props)
    const { title, body, image, datetime } = props.data;
    let recent = datetime?.slice(0, 4);
    if (recent == '2020' && recent == '2021') {
        console.log(recent);

    }
    return (
        <div className="col-6 ">
            <div className="card recentBody mb-3"   >
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title TitleColor">{title}</h5>
                            <p className="card-text BodyColor">{body}</p>
                            <p className="card-text BodyColor">{datetime.slice(0, 4)}</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src={image} alt="" />
                    </div>
                </div>
            </div>
            <h1>{title}</h1>

        </div >
    );
};

export default Recent;