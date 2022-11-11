import { createContext, ReactNode, useEffect, useState } from 'react'
import { MapContextInterface, SelectedType, SelectEnum } from './types'

const DEFAULT_VALUE = {
    selected: {
        brazil: false,
        haiti: false,
        hispanic: false
    }
} as MapContextInterface

const MapContext = createContext<MapContextInterface>(DEFAULT_VALUE)

const MapProvider = ({ children }: { children: ReactNode }) => {
    const [selected, setSelected] = useState<SelectedType>(DEFAULT_VALUE.selected)

    const updateSelected = (data: Partial<SelectedType>) => setSelected({ ...selected, ...data })

    return (
        <MapContext.Provider value={{
            selected, updateSelected
        }}>
            {children}
        </MapContext.Provider>
    )
}

export { MapContext }
export default MapProvider
