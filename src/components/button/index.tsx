import React from "react"

type ButtonType = {
  href: string
  label: string
}

const Button = (props: ButtonType) => {
  const { href, label } = props
  return <a href={href}>{label}</a>
}
export default Button
