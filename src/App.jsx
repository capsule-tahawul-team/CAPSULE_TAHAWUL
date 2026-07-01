import MainLayout from "./layouts/MainLayout";
import Dashboard from "./page/Dashboard";
import { RoleProvider } from "./context/RoleContext";

function App() {
  return (
    <RoleProvider>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </RoleProvider>
  );
}

export default App;
