import React, { useEffect, useState } from "react";



const Api = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        try {

            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            //    console.log(actualData.statewise[0].active);
            setData(actualData.statewise[0])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();

    }, []);

    return (
        <>
        
            <div className="centerDiv">
           <h1 className="live">LIVE</h1>
                <ul className="u">
                    <li className="card color">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>OUR</span>COUNTRY </p>
                                <p className="card__total card__small">INDIA</p>
                            </div>
                        </div>
                    </li>

                    <li className="card color1">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>TOTAL</span>RECOVERED </p>
                                <p className="card__total card__small">{data.recovered}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card color2">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>TOTAL</span>CONFIRMED</p>
                                <p className="card__total card__small">{data.confirmed}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card color3">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>TOTAL</span>DEATH</p>
                                <p className="card__total card__small">{data.deaths}</p>

                            </div>
                        </div>
                    </li>

                    <li className="card color4">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>TOTAL</span>ACTIVE</p>
                                <p className="card__total card__small">{data.active}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card color5">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>LAST</span>UPDATED </p>
                                <p className="card__total card__small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>





        </>

    )
}
export default Api;
