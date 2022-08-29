import React from "react"

type User = {
  name: string
}

function Workouts({ name }: User) {
  return <div>Workouts - {name} </div>
}

export default Workouts
