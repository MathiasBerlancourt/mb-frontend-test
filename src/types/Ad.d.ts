export interface Ad {
    publisher: Publisher
    reference?: string
    lastPriceChangeDate?: string
    lastPublicationDate?: string
    deletionDate: any
    title: string
    description: string
    pictureUrl?: string
    pictureUrls: string[]
    position?: number[]
    price: number
    priceDrop?: number
    rent?: number
    propertyCharges: any
    propertyTax?: number
    rooms?: number
    bedrooms?: number
    pricePerSquareMeter?: number
    surface?: number
    landSurface?: number
    constructionYear?: number
    floor: any
    buildingFloors?: number
    options: string[]
    energyValue?: number
    energyGrade?: string
    gasValue?: number
    gasGrade?: string
    priceStats?: PriceStats
    location: Location
    origin: string
    adId: string
    publicationDate: string
    type: string
    category: string
    url: string
    creationDate: string
    duplicates: Duplicate[]
    uniqueId: string
    originalPrice?: number
}

export interface Publisher {
    type: string
    name?: string
    email?: string
    phone?: string
    address?: string
}

export interface PriceStats {
    rent?: number
    profitability?: number
    lowPrice: number
    medianPrice: number
    highPrice: number
    priceGap: number
}

export interface Location {
    city: string
    postalCode: string
    inseeCode: string
    departmentCode: number
    regionCode: number
    coordinates: number[]
    population: number
    propertyTaxRate: number
    nbStudyingStudents: any
    nbLivingStudents: number
    district: any
    isRightLocation?: boolean
}

export interface Duplicate {
    origin: string
    adId: string
    url: string
    price: number
    date: string
    lastCheckDate: string
    publisher: Publisher2
}

export interface Publisher2 {
    type: number
    name?: string
    email?: string
    phone?: string
    address?: string
}
