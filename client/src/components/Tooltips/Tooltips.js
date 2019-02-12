import React, { Component } from "react";
import styles from "./Tooltips.module.css";
import MenuBtn from "../MenuBtn/MenuBtn";

class Tooltips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }
  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    let message = this.props.message;
    // let position = this.props.position;
    return (
      //   <span className={styles.tooltip} onMouseLeave={this.hideTooltip}>
      //     {this.state.displayTooltip && (
      //       <div className={`${styles.tooltipBubble} ${styles.tooltipBottom}`}>
      //         <div className={styles.tooltipMessage}>{message}</div>
      //       </div>
      //     )}
      <MenuBtn
        onMouseOver={this.showTooltip}
        active={this.props.active}
        toggleShape={this.props.toggleShape}
      >
        <span className={styles.tooltip} onMouseLeave={this.hideTooltip}>
          {this.state.displayTooltip && (
            <div className={`${styles.tooltipBubble} ${styles.tooltipBottom}`}>
              <div className={styles.tooltipMessage}>{message}</div>
            </div>
          )}
        </span>
      </MenuBtn>
    );
  }
}

export default Tooltips;

/* <span className="tooltip-trigger" onMouseOver={this.showTooltip}>
{this.props.children}
</span> */

//   class App extends React.Component {
//     render() {
//       return (
//         <div className='container'>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'top'}>tooltip</Tooltip> on top.</p>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'bottom'}>tooltip</Tooltip> on bottom.</p>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'left'}>tooltip</Tooltip> on left.</p>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'right'}>tooltip</Tooltip> on right.</p>
//         </div>
//       )
//     }
//   }
