import React, { useEffect, useRef } from 'react';
import TextCommandContainer from './TextCommandsContainer';
import NonTextBasedCommands from './NonTextBasedCommands';
import useMediaQuery from '../utils/hooks/isMobile';
import SideBar from './Sidebar';
import useOnScreen from '../utils/hooks/useOnScreen';

export type ContainerTypes = 'text' | 'nonText';

export default function CommandContainer() {
  const isMobile = useMediaQuery(1000);
  let textCommandsRef = React.createRef<HTMLDivElement>();
  let nonTextCommandsRef = React.createRef<HTMLDivElement>();

  const visibleContainer: ContainerTypes = useOnScreen(textCommandsRef)
    ? 'text'
    : 'nonText';

  return (
    <>
      <div
        className="relative top-0 flex h-full max-w-[95vw]"
        id="textCommandContainer">
        {!isMobile ? (
          <SideBar containerVisible={visibleContainer} />
        ) : null}

        <div className="relative top-0 flex h-full translate-x-16 flex-col">
          <TextCommandContainer ref={textCommandsRef} />
          <NonTextBasedCommands ref={nonTextCommandsRef} />
        </div>
      </div>
    </>
  );
}
