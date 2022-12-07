import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Chat from './commands/chat/Chat';
import Rng from './commands/rng/Rng';
import UwUfy from './commands/uwufy/UwUfy';
import useMediaQuery from '../utils/hooks/isMobile';

const TextCommandContainer = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const isMobile = useMediaQuery(1000);
    return (
      <div
        ref={ref}
        id="textCommandContainer"
        className="my-4 mx-2 flex h-full w-full flex-grow flex-col">
        <div
          className={`${
            !isMobile ? 'ml-24' : ''
          } mt-6 h-32 w-5/6 flex-row items-center justify-center`}>
          <p className="my-2 flex flex-auto font-semibold text-primary">
            Hello Gamer!
          </p>
          <h1 className="flex flex-auto text-5xl font-bold">
            Welcome to Text Based Commands!
          </h1>
        </div>

        <div className="self-strech ml-12 mt-12 inline-flex w-[85%] rounded-3xl bg-[#313344]">
          <div className="self-strech inline-flex flex-wrap justify-evenly">
            <div className="flex w-full justify-center">
              <UwUfy />
            </div>
            <Chat />
            <Ask />
            <Choose />
            <Rng />
          </div>
        </div>
      </div>
    );
  }
);

export default TextCommandContainer;
