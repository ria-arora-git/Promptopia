import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Promptopia",
  description: 'Discover & Share AI Prompts'
}

const layout = ({children}) => {
  return (
    <html>
      <body>
        <div>
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>

      </body>
    </html>
  )
}

export default layout