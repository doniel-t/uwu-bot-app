import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Chat from './commands/chat/Chat';
import Rng from './commands/rng/Rng';
import UwUfy from './commands/uwufy/UwUfy';

export default function TextCommandContainer() {
  return (
    <div id="textCommandContainer" className="flex flex-wrap justify-evenly ">
      <UwUfy />
      <Ask />
      <Choose />
      <Rng />
      <Chat />
    </div>
  );
}
