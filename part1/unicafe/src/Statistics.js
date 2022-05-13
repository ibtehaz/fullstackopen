import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {

    const roundToTwoDecimals = (number) =>  Math.round(number * 100 + Number.EPSILON) / 100;


    const total = good + neutral + bad
    const average = total > 0 ? roundToTwoDecimals(good - bad / total) : 0
    const positive = total > 0 ? roundToTwoDecimals(good / total * 100) : 0


    


    if (total === 0) {
        return (
        <div>
            <p>No feedback given</p>
        </div>
        )
    }
    
    return (
        <table>
        <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
        </tbody>
        </table>
    )
}

export default Statistics