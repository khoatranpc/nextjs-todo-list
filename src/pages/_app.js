import DefaultLayout from '@/layouts/default';
import MainLayout from '@/layouts/main';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const LayoutComponent = Component.Layout || DefaultLayout;
  return (
    <MainLayout>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </MainLayout>
  )
}
