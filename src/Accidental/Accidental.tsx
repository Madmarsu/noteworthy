import React, { Component } from 'react';
import { AccidentalType } from '../types/AccidentalTypes';

interface AccidentalProps {
  type: AccidentalType;
  x: number;
  y: number;
  color: string;
  tooltip?: string;
  onMouseDown?: (e: React.MouseEvent<SVGRectElement>) => void;
  isSelected?: boolean;
}
export default class Accidental extends Component<AccidentalProps> {
  render() {
    const { x, y, type, color, tooltip } = this.props;
    let renderPath;
    if (type === AccidentalType.FLAT) {
      renderPath =
        'M 8.003 10.913 C 5.793 13.673 3.935 15.255 1.486 17.113 L 1.486 7.966 C 2.042 6.56 2.864 5.421 3.953 4.547 C 5.038 3.677 6.138 3.24 7.252 3.24 C 12.455 3.994 10.632 8.417 8.003 10.913 Z M 1.486 3.458 L 1.486 -22.174 L -0.499 -22.174 L -0.499 18.777 C -0.499 20.017 -0.161 20.638 0.516 20.638 C 0.907 20.638 1.394 20.31 2.12 19.876 C 7.062 16.831 10.234 14.367 13.406 10.021 C 14.386 8.678 15.077 5.629 13.66 3.5 C 12.775 2.175 11.09 0.779 8.93 0.367 C 6.131 -0.165 3.72 1.227 1.486 3.458 Z';
    } else if (type === AccidentalType.SHARP) {
      renderPath =
        'M -1.739 26.113 L -1.739 14.919 L 2.899 13.606 L 2.899 24.742 L -1.739 26.113 Z M 7.394 23.405 L 4.205 24.342 L 4.205 13.206 L 7.394 12.292 L 7.394 7.667 L 4.205 8.58 L 4.205 -2.799 L 2.899 -2.799 L 2.899 8.925 L -1.739 10.294 L -1.739 -0.771 L -2.971 -0.771 L -2.971 10.715 L -6.16 11.631 L -6.16 16.266 L -2.971 15.352 L -2.971 26.467 L -6.16 27.378 L -6.16 31.995 L -2.971 31.081 L -2.971 42.396 L -1.739 42.396 L -1.739 30.676 L 2.899 29.368 L 2.899 40.375 L 4.205 40.375 L 4.205 28.954 L 7.394 28.038 L 7.394 23.405 Z';
    } else if (type === AccidentalType.NATURAL) {
      renderPath =
        'M -3.963 0.913 C -3.562 0.713 -3.11 0.562 -2.659 0.562 C -2.207 0.562 -1.806 0.713 -1.404 0.913 L -1.555 10.095 L 3.764 9.091 L 3.914 9.091 C 4.416 9.091 4.818 9.443 4.818 9.944 L 5.168 38.543 C 4.767 38.743 4.366 38.894 3.914 38.894 C 3.463 38.894 3.061 38.743 2.66 38.543 L 2.811 29.361 L -2.508 30.365 L -2.659 30.365 C -3.16 30.365 -3.562 30.013 -3.562 29.512 Z M 3.011 14.109 L -1.604 14.961 L -1.755 25.347 L 2.86 24.494 Z';
    }
    return (
      <g transform={`translate(${x}, ${y})`} data-tip={tooltip}>
        <path d={renderPath} fill={color} />
      </g>
    );
  }
}
