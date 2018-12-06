import React, { Component } from 'react';
import CreateForm from '../../components/createForm';
import {connect} from 'react-redux';
import {userPost} from '../../store/action'

 class CreateProject extends Component {
     constructor (props){
                super(props);
                    this.state = {
                        userdata:{
                            userId:'',
                            title:'',
                            body:''
                        }
                       
                    
                        
                       
                  }
     }

     componentDidMount() {
        if (this.props.match.params && this.props.match.params.id && this.props.posts) {
            let userInfo = this.props.posts.find(post => this.props.match.params.id === post.id.toString());
            if(userInfo){
                this.setState({
                    userdata:{
                        userId: userInfo.userId,
                        title: userInfo.title,
                        body: userInfo.body
                    }
                })
            }
            
        }
     }

  handleChange = (e) => {
      //console.log(e)
      const data = {[e.target.id] :e.target.value}
     this.setState({
        userdata: {...this.state.userdata,...data}  
     })
  }

  handlerSubmit = (e) =>{
     e.preventDefault();
    // console.log(this.state.userdata)
     this.props.users(this.state.userdata);
     this.setState({userdata:{
        userId:'',
        title:'',
        body:''
    }});
     
  }


  render() {
    return (
      <div>
         <CreateForm handlerChange = {this.handleChange} handlerSubmit = {this.handlerSubmit} user={this.state.userdata} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.user.fetchusers.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        users : (data) =>dispatch(userPost(data))
    }
}


export default connect(mapStateToProps ,mapDispatchToProps) (CreateProject) ;
