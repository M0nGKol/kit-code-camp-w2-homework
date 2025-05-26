import React from "react"
type ButtonProps ={
    children: Readonly<React.ReactNode>;
    color : string;
    border: string;
    name ?: string;
};
const button = (props:ButtonProps) => {
    const {children,color, border, name} = props;
    console.log(props)
  return (
    <div>
      <button className={`${color} ${border}`}>{children}</button>
    </div>
  )
}

export default button
