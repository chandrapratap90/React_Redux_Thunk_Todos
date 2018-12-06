import React, { Component } from 'react';
import ProjectviewTable from '../../components/projectView'
import { connect } from 'react-redux';
import { fetchUser,userPostDelete } from '../../store/action'

class ProjectView extends Component {
  componentDidMount() {
    this.props.userload()
  }

  
  render() {
    const { userInfo } = this.props;

    return (
      <ProjectviewTable userInfo={userInfo} deleteHandler ={this.props.deletePost} {...this.props}/>
    )
}
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.fetchusers
  }
}
const mapDispatchToProps = dispatch =>{
  return {
     userload:()=>dispatch(fetchUser()),
     deletePost: (id) => dispatch(userPostDelete(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectView);
