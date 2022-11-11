export type SelectedType = {
    brazil: boolean,
    haiti: boolean,
    hispanic: boolean
}

export interface MapContextInterface {
    selected: SelectedType,
    updateSelected: (arg0: Partial<SelectedType>) => void
}

export enum SelectEnum {
    BRAZIL = 'BRAZIL',
    HAITI = 'HAITI',
    HISPANIC = 'HISPANIC',
}