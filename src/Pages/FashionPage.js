import React from 'react'
import '../App.css';
import 'react-vis';
import {
    XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries,
    VerticalBarSeriesCanvas,
} from 'react-vis';

function FashionPage() {

    const useCanvas = true;
    const BarSeries = VerticalBarSeries;
    const data = [
        { x: 0, y: 1 },
        { x: 1, y: 1.2 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 11 },
        { x: 5, y: 15 },
        { x: 6, y: 20 },
        { x: 7, y: 25 },
        { x: 8, y: 24 },
        { x: 9, y: 26 },
        { x: 10, y: 28 },
        { x: 11, y: 31 },
        { x: 12, y: 31 },
        { x: 13, y: 32 },
        { x: 14, y: 34 },
        { x: 15, y: 41 },
    ]

    return (
        <div className="App">
            <XYPlot xType="ordinal" stackBy="y" height={300} width={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <BarSeries
                    cluster="2015"
                    data={[
                        { x: 'Q1', y: 3 },
                        { x: 'Q2', y: 7 },
                        { x: 'Q3', y: 2 },
                        { x: 'Q4', y: 1 }
                    ]} />
                <BarSeries
                    cluster="2015"
                    data={[
                        { x: 'Q1', y: 3 },
                        { x: 'Q2', y: 8 },
                        { x: 'Q3', y: 11 },
                        { x: 'Q4', y: 19 }
                    ]} />
                <BarSeries
                    cluster="2016"
                    data={[
                        { x: 'Q1', y: 22 },
                        { x: 'Q2', y: 2 },
                        { x: 'Q3', y: 22 },
                        { x: 'Q4', y: 18 }
                    ]} />
            </XYPlot>
        </div >
    )
}

export default FashionPage
