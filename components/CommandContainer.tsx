import React from 'react';
import Ask from './commands/ask/Ask';
import Choose from './commands/choose/Choose';
import Cleverbot from './commands/cleverbot/Cleverbot';
import Rng from './commands/rng/Rng';
import UwUfy from './commands/uwufy/UwUfy';

export default function CommandContainer() {
  return (
    <div id="commandContainer" className="flex flex-wrap justify-evenly ">
      <UwUfy />
      <Ask />
      <Choose />
      <Rng />
      <Cleverbot />
    </div>
  );
}
