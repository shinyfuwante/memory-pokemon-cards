import CardContainer from "./components/Game/CardContainer/CardContainer";
const test_input = [
  {
    name: 'binacle',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png'
  },
  {
    name: 'pangoro',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png'
  },
  {
    name: 'gogoat',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png'
  },
  {
    name: 'honedge',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png'
  },
  {
    name: 'dedenne',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png'
  }
]
function App() {
  return (
    <CardContainer input = {test_input}>
    </CardContainer>
  )
}

export default App;
