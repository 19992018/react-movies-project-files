import ListGroup from "./components/ListGroup";

const cities = [
  "Tokyo",
  "Japan",
  "San Fransisco",
  "New York",
  "Paris",
  "Nairobi",
];
const africanCities = [
  "Nairobi",
  "Kampala",
  "Dar-es-Salaam",
  "Lagos",
  "Cape Town",
];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={africanCities}
        heading="African Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
