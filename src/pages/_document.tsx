import config from '@/config';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
      }
      document.documentElement.classList.add(getUserPreference());
    `;
    return (
      <Html lang='en'>
        <Head />
        <body className={'dark:bg-darkBg bg-lightBg'}>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
