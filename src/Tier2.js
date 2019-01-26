import React from 'react'
import Tier3 from './Tier3'

const Tier2 = (props) => (
  <div className="tier2" onClick={props.handleClick} style={{backgroundColor: props.color, color: props.color}}>
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
  </div>
)

export default Tier2

//

// import React, { Component } from 'react'
// import { getReducedColor } from './randomColorGenerator.js'
// import Tier3 from './Tier3'


// export default class Tier2 extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       childColor: getReducedColor(this.props.color),
//     }
//   }

//   render() {
//     // hard coded color values have been added below, though they won't be
//     // present in our solution. What should they be replaced with?
//     return (
//       <div className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
//         <Tier3 color={"#0F0"} />
//         <Tier3 color={"#F00"} />
//       </div>
//     )
//   }
// }
