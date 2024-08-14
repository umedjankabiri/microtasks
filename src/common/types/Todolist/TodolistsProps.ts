import {FilterValuesType} from "common/types/Todolist/FilterValuesProps.ts";

export type TodolistsProps = {
    TodolistID: string
    title: string
    filter: FilterValuesType
}