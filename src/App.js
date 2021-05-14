import React from 'react'

const user = {
  email: 'gwen@example.com',
  type: 'Staff'
}

function useUserType(currentUser) {
  let isAdmin = false;

  switch (currentUser.type) {
    case 'Staff':
        isAdmin = false;
        break;
    case 'Admin':
        isAdmin = true;
        break;
  }
  return [isAdmin];
}

function App() {
  const [isAdmin] = useUserType(user);
  return (
    <div>
      <p>
        {
          isAdmin ? 'Admin user' : 'Not admin user'
        }
      </p>
    </div>
  );
}

export default App;