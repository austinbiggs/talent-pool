import * as React from 'react';
import { DM_Sans } from 'next/font/google';

import './global.scss';
import 'the-new-css-reset/css/reset.css';

const dmSansFont = DM_Sans({ subsets: ['latin'] });

export function AppRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <html lang="en" className={dmSansFont.className}>
        <body>
          <>{children}</>
        </body>
      </html>
    </React.StrictMode>
  );
}
