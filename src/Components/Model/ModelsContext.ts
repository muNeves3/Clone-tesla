import react, { ReactNode } from 'react';

export interface CarModel {
    modelName: string
    overlayNode: ReactNode
    sectionReference: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperReference: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
}

export default react.createContext<ModelsContext>({} as ModelsContext)