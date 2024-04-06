import './App.css';

function Center({children}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const CustomHeading = () => {
    return <h2>bobbyhadz.com</h2>;
  };

  // 👇️ Pass children to the Center component
  return (
    <div>
      <Center>
        <CustomHeading />
      </Center>
    </div>
  );
}
