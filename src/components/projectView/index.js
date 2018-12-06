import React from 'react'

const ProjectviewTable = (props) => {
  if(props.userInfo.isLoading){
    return (<div className="alert alert-danger center "> <h3>User Post Deleting please wait...</h3></div>)
  }
  return (
    <div className="container-fluid" >
    <h2 className="p-2"> User View </h2>  
   <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">userId</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
     { props.userInfo.data.map((user,index) =>(
         
        <tr key={user.id}>
         <th scope="row">{index+1}</th>
         <td>{user.userId}</td>
         <td className="width_content">{user.title}</td>
         <td className="width_content" >{user.body}</td>
         <td><button type="button" className="btn btn-outline-primary btn-sm mr-2" onClick={() => props.history.push(`/createProject/${user.id}`)}>Edit</button><button type="button" className="btn btn-outline-danger btn-sm" onClick={()=> props.deleteHandler(user.id)}>Delete</button></td>
       </tr>
         
     )

      )
     
     }
    
    
  </tbody>
</table>
       
      
   
     
    </div>
  )
}

export default ProjectviewTable
