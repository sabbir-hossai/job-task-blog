import React, { useEffect, useState } from 'react';
import Recent from './Recent/Recent';

const Blogs = () => {
    const [recentData, setRecentData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/Blogs')
            .then(res => res.json())
            .then(data => setRecentData(data))
    }, [])
    // let recent = recentData?.datetime?.slice(0, 4);
    // if (recent == '2020' && recent == '2021') {
    //     console.log(recent);

    // }
    console.log(recentData)
    return (
        <div>
            <div>
                <h1>Recent</h1>
                <div class="container">
                    <div class="row">
                        {
                            recentData.map(data => <Recent
                                key={data._id}
                                data={data}></Recent>)
                        }
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>old</h1>
            </div>

        </div>
    );
};

export default Blogs;