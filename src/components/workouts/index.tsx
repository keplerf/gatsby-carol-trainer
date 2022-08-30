import React from "react"

interface User {
  name: string
}

const Workouts = (props: User) => {
  return <div>Workouts - {props.name} </div>
}

export default Workouts
