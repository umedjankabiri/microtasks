import {BanknoteProps} from "common/types/Button/BanknoteProps.ts";
import {FilterProps} from "common/types/Button/FilterProps.ts";

export type DisplayFilterProps = {
    filteredMoney: BanknoteProps[]
    onClick?: (banknote: FilterProps) => void
}