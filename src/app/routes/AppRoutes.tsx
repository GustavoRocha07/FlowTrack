import { Navigate, Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/app/layout/AppLayout';

import { DashboardPage } from '@/modules/dashboard/pages/DashboardPage';
import {RequestsPage} from '@/modules/requests/pages/RequestsPages'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          index
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/requests"
          element={<RequestsPage />}
        />
      </Route>
    </Routes>
  );
}