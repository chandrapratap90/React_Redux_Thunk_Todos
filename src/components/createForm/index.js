import React from 'react'

const CreateForm = (props) => {

  return (
    <div className="container-fluid">
     <div className="row">
       <div className="col">
    <form onSubmit={props.handlerSubmit}>
      <h2 className="p-2"> Create User Info</h2>  
        <div className="form-group">
            <label htmlFor="userId">userId</label>
            <input type="text" value={props.user.userId} className="form-control" id="userId"  onChange={props.handlerChange} placeholder="userId"/>
          </div>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" value={props.user.title} className="form-control" id="title" onChange={props.handlerChange} placeholder="title"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" value={props.user.body} id="body" rows="3" onChange={props.handlerChange}></textarea>
          
          </div>
       <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>
 </div>
  )

}

export default CreateForm
