export interface SaleItem {
    product: string,
    userId: string | null,
    itemId: number,
    quantity: number
}
export interface JoinedSaleItem extends SaleItem {
    id: number,
    saleDate: string
}
