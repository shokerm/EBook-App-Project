import { LocalStorageKey } from "./enums";
import { Item } from "./item";
import { LocalStorageHandler } from "./localStorageHandler";
import { SaleItem } from "./saleItem";


export function saleDTOArray(arr: Item[]) {
    let newSaleItemDTO: any = [];
    arr.forEach((i: any) => {
        let userDTO: SaleItem = {
            product: i.name,
            itemId: i.id,
            userId: LocalStorageHandler.getFromLocalStorage(LocalStorageKey.id),
            quantity: i.quantity,

        };
        newSaleItemDTO.push(userDTO);
        console.log(i.userId);

    });
    return newSaleItemDTO;

}