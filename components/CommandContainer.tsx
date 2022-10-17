import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Cleverbot from './commands/cleverbot/Cleverbot';
import UwUfy from './commands/uwufy/UwUfy';

export default function CommandContainer() {
  return (
    <div id="commandContainer" className="flex flex-wrap justify-evenly ">
      <UwUfy />
      <Ask />
      <Choose />
      <UwUfy />
      <Cleverbot />
    </div>
  );
}
