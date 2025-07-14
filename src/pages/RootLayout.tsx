

import { Outlet } from 'react-router';
import AppLayout from '../components/layouts/AppLayout';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
            <AppLayout>
              <main className='w-full h-full p-4'>
                <Outlet />
              </main>
            </AppLayout>
    </div>
  );
}

export default RootLayout;