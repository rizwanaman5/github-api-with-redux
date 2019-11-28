import React from 'react'
import { getUsers } from './movieAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MovieList extends React.Component {
    state = {
        MOVIES: ''
    }
    // componentWillMount() {
    //     this.props.getUsers()
    // }

    render() {
        console.log(this.props.data)
        return (
            <div className="row">
                {!this.props.data.length ? <button onClick={() => this.props.getUsers()} >getData</button> : null}
                {this.props.data
                    ? this.props.data.map((user) => (

                        <div className="card col-4 p-2 m-3" style={{ width: "18rem", color: '#000' }}>
                            <img src={user.avatar_url} className="card-img-top w-50" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{user.login}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href={user.html_url} target="blank" className="btn btn-primary">Check-out Profile</a>
                            </div>
                        </div>

                    ))
                    : <h1>No data</h1>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.MovieReducer.movies
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)