import React, {FC, SVGProps} from 'react';

const ArrowRight: FC<SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="#87ff87" {...props}>
    <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12Z" />
  </svg>
);
export default ArrowRight;
