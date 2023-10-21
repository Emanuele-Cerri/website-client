export interface PricingTypology {
    title: string,
    description: string,
    price: string,
    reccomended: boolean,
    buttonTitle: string
}

export interface PricingSchema {
    title: string,
    isIncluded: boolean[],

}

export interface Pricing {
    title: string,
    pricingTypology: PricingTypology[],
    pricingSchema: PricingSchema[]
}