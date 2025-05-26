type User={
  id : number,
  name: string,
  age:number,
  gender: string
}
type userProps={
  users : User[]
}
const Username = ({users}:userProps) => {

    const userAboveFirteenth = users.filter((user)=> user.age>15)
  return (
    <div>
      <h3>User with age more than 25</h3>
      {userAboveFirteenth.map((user)=> (
        <div className="flex"  key={user.id}>
        <p>Username: {user.name}</p>
        <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  )
}
export default Username
