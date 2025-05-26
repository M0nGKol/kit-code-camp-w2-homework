type User={
    id : number,
    name: string,
    age:number,
    gender: string
  }
  type userProps={
    users : User[]
  }
const InfoCard = ({users}:userProps) => {
  return (
    <div>
      <h3>All Users</h3>
      {users.map((user)=> (
        <div className="flex"  key={user.id}>
        <p>Username: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Gender : {user.gender}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoCard

