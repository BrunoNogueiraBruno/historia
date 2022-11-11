import MapProvider from './context/MapContext'
import PrimeiroReinado from './views/PrimeiroReinado'

function App() {

  return (
    <div className="App">
      <MapProvider>
        <PrimeiroReinado />
      </MapProvider>
    </div>
  )
}

export default App
