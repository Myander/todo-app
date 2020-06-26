import React, { FC } from 'react';
import styled from 'styled-components';

interface IconProps {
  className?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Icon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})``;

const Svg = styled(Icon)<IconProps>`
  width: 1.8rem;
  height: 1.8rem;
  color: ${props => props.theme.colors.secondary};
`;

export const IconButton = styled.div`
  padding: 3px 3px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 10rem;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: rgba(153, 153, 153, 0.3);
  }
`;

export const EditIcon: FC = () => (
  <Svg viewBox="0 0 50 50">
    <path
      fill="currentColor"
      d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"
    />
  </Svg>
);

export const DeleteIcon: FC = () => (
  <Svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"
    />
  </Svg>
);

export const PlusIcon: FC<IconProps> = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
    />
  </Svg>
);
