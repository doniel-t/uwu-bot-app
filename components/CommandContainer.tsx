import React, { useEffect, useState } from 'react';
import MobileCommandContainer from './MobileCommandContainer';
import TextCommandContainer from './TextCommandsContainer';
import useIsMobile from '../utils/hooks/isMobile';
import NonTextBasedCommands from './NonTextBasedCommands';
import useMediaQuery from '../utils/hooks/isMobile';

export default function CommandContainer() {
  const isMobile = useMediaQuery(1000);
  return (
    <div className="flex items-start justify-center sm:w-screen">
      {isMobile ? (
        <MobileCommandContainer />
      ) : (
        <>
          <TextCommandContainer />
          <NonTextBasedCommands />
        </>
      )}
    </div>
  );
}
