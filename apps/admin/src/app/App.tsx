import { useEffect, useState } from 'react';
import { createApiClient } from '@delivery-app/api-client';

type HealthResponse = {
  status: string;
};

const api = createApiClient('http://localhost:3000');

export default function App() {
  const [message, setMessage] = useState('Checking /health...');

  useEffect(() => {
    api
      .get<HealthResponse>('/health')
      .then((data) => setMessage(`Health: ${data.status}`))
      .catch((error: Error) => setMessage(`Error: ${error.message}`));
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        padding: '24px',
      }}
    >
      <h1>Delivery Admin</h1>
      <p>{message}</p>
    </main>
  );
}
