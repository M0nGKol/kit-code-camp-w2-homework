import './App.css'
import InfoCard from './components/InfoCard';
import Username from './components/username';
// import Test from './components/InfoCard'
// import ArrowFunc from './components/arrowFunc'
// import Button from './components/button'
// import ItemListing from './views/item-listing'
function App() {
  const users =[
    {id:1, name:"Jonh Doe", age:12, gender:"M"},
    {id:2, name:"Agent 05", age:32, gender:"F"},
    {id:3, name:"John Pork", age:22, gender:"M"},
    {id:4, name:"TimCheese", age:11, gender:"F"},
];

  return (
    <div>
      {/* <Test/>
      <ArrowFunc/>
      <Button color="blue" border="rounded" name="John Doe">Incresement</Button>
      <Button color="red" border="rounded-full">Decresement</Button>
      <Button color="green" border='rounded'>Decresement</Button> */}
      {/* <ItemListing/> */}

      <Username users={users}/>
      <InfoCard users={users}/>
    </div>
  )
}
export default App
