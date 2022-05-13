const Total = (props) => {
    const total = props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises
    return (
        <div>
            <p>
                Number of exercises {total}
            </p>
        </div>
    )
}

export default Total