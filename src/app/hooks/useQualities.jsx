import React, { useContext } from 'react'

const QualitiesContex = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContex)
}
const qualities = [{_id:22313, name: 'kjhk'}]
export const QualitiesProvider = ({children}) => {
  return <QualitiesContex.Provider value={qualities}>
    {children}
  </QualitiesContex.Provider>
}