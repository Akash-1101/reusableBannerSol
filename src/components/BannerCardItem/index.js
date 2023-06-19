// Write your code here.
import './index.css'
// import './App.js'
const Bgcontainer = props => {
  const {headerText, description, className} = props
  console.log('Hi')
  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
    </div>
  )
}
export default Bgcontainer
