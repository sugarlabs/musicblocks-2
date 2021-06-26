import { useEffect } from 'react';

// -- types ----------------------------------------------------------------------------------------

import { IArtboardProps } from '../../@types/artboard';

// -- subcomponent ---------------------------------------------------------------------------------

import P5Board from './p5Board';

// -- stylesheet -----------------------------------------------------------------------------------

import './Artboard.scss';

// -- view component definition --------------------------------------------------------------------

/**
 * View of the Artboard Framework component.
 *
 * @returns root JSX element
 */
export default function (props: IArtboardProps): JSX.Element {
  useEffect(() => {
    window.addEventListener('resize', props.updateDimensions);
    return () => window.removeEventListener('resize', props.updateDimensions);
  }, []);

  return (
    <div id="artboard-wrapper">
      <h4>Artboard {`(${props.dimensions[0]} × ${props.dimensions[1]})`}</h4>
      <div id="boards">
        <P5Board index={0} />
        <P5Board index={1} />
      </div>
    </div>
  );
}
