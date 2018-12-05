import React from 'react'

import { connect } from 'react-redux'


const RandomUsers = (props) => (
    <div>{
        props._users.map(
            user => <div>{user.name.first}</div>
        )
    }
    </div>
)


const mapStateToProps = state => ({
    _users: state.randomUsers.users
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)

