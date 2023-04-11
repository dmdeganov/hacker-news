import React, {FC, SVGProps} from 'react';

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#87ff87" viewBox="0 0 24 24" width={20} height={20} {...props}>
    <path d="M8 5.14v14l11-7-11-7Z" />
  </svg>
);
export default ArrowRightIcon;
