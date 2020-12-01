import React from 'react'
import {encodeRoom} from '../lib/room-encoding'

export default class SetNickname extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      nickname: '',
    }

  }

  onChange(evt) {

    this.setState({
      nickname: evt.target.value
    });

  }

  onSetNickname(nickname) {

    const {onSetNickname} = this.props

    nickname = nickname.replace(/\s\s+/g, ' ')
    nickname = nickname.trim()

    onSetNickname(nickname)

  }

  render() {

    const {roomName, created} = this.props
    const {nickname} = this.state

    return (
      <div id='set-nickname' className='container'>
        <h3>Your Room: {created ? 'Creating ' : null}{roomName}</h3>
        <h5>Your Name:</h5>
        <form onSubmit={(e) => {e.preventDefault(); this.onSetNickname(nickname)}}>
          <div>
            <input
              type='text'
              placeholder= 'Enter Your Name'
              value={this.state.roomValue}
              onChange={evt => this.onChange(evt)}
              required
              minLength='3'
            />
          </div>
          <div>
            <button
              type='submit'
              className='button-primary'
            >
              Enter Call
            </button>
          </div>
        </form>
      </div>
    )

  }

}
