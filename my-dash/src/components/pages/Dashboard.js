import React from 'react';
import ChartFirst from '../charts/Chart1';
import ChartSecond from '../charts/Chart2';
import ChartThird from '../charts/Chart3';
import ChartFour from '../charts/Chart4';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="flex-grow-1">
                            <div className="flex-grow-1 mt-3 mt-lg-0 ml-lg-3">
                                <ChartSecond></ChartSecond> <br></br>
                                <ChartFirst></ChartFirst>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-3 mt-lg-0">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="flex-grow-1">
                            <div className="flex-grow-1 mt-3 mt-lg-0 ml-lg-3">
                                <ChartFour></ChartFour><br></br>
                                <ChartThird></ChartThird>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard