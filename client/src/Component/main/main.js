import React from 'react'
import TripChoice from '../TripChoice/TripChoice'
import axios from 'axios'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: []
    }
  }

  getActivities = async () => {

  const response = await axios.get('https://docs.google.com/spreadsheets/d/1Xsouj8zOSQHX0Y-iL3IvBJVg55WxV0FOzMDVx-8sdtg/edit#gid=0')
  console.log(response)
  const activity = response.data.feed.entry.map( (d,i) => {
    return {
      image: d.gsx$image.$t,
      name: d.gsx$activity.$t
    }
  })
  this.setState({
    activity: activity
  })
}

componentDidMount() {
  this.getActivities()
}

  render() {
    return (
      <div>
        <TripChoice
          
        />
      </div>
    )
  }
}

export default Main
