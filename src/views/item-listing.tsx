const ItemListing = () => {
    const users =[
        {id:1, name:"Jonh Doe", age:12, gender:"M"},
        {id:2, name:"Agent 05", age:32, gender:"F"},
        {id:3, name:"John Pork", age:22, gender:"M"},
        {id:4, name:"TimCheese", age:11, gender:"F"},
    ];

    const userAboveFirteenth = users.filter((user)=> user.age>15)

  return (
    <>
        <h3>User with age more than 25</h3>
      {userAboveFirteenth.map((user)=> (
        <div className="flex"  key={user.id}>
        <p>Username: {user.name}</p>
        <p>Age: {user.age}</p>
        </div>
      ))}
      <h3>All Users</h3>
        {users.map((user)=> (
            <div className="flex"  key={user.id}>
            <p>Username: {user.name}</p>
            <p>Age: {user.age}</p>
            </div>
        ))}
    </>
  )
}

export default ItemListing
