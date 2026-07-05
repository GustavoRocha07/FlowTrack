import { Route, Routes } from 'react-router';


import { DashboardPage } from '@/modules/dashboard/pages/DashboardPage';
import { RequestsPage } from '@/modules/requests/pages/RequestsPages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path="/requests" element={<RequestsPage />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}