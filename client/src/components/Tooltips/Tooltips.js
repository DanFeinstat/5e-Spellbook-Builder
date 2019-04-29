import React from "react";
import styles from "./Tooltips.module.css";
import MenuBtn from "../MenuBtn/MenuBtn";

const Tooltips = props => {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       displayTooltip: false,
  //     };
  //     this.hideTooltip = this.hideTooltip.bind(this);
  //     this.showTooltip = this.showTooltip.bind(this);
  //   }

  //   hideTooltip() {
  //     this.setState({ displayTooltip: false });
  //   }
  //   showTooltip() {
  //     this.setState({ displayTooltip: true });
  //   }

  return (
    // let position = this.props.position;
    //   <span className={styles.tooltip} onMouseLeave={this.hideTooltip}>
    //     {this.state.displayTooltip && (
    //       <div className={`${styles.tooltipBubble} ${styles.tooltipBottom}`}>
    //         <div className={styles.tooltipMessage}>{message}</div>
    //       </div>
    //     )}
    // <MenuBtn
    //   active={this.props.active}
    //   toggleShape={this.props.toggleShape}
    // >
    <span className={styles.tooltip}>
      {props.displayMenu && (
        <div className={`${styles.tooltipBubble} ${styles.tooltipBottom}`}>
          <div className={styles.tooltipMessage}>{props.message}</div>
        </div>
      )}
    </span>
    // </MenuBtn>
  );
};

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
