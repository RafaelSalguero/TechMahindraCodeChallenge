export interface TableColumn<T>{
    /**Return the cell for the given table row */
    data?: (row: T) => React.ReactNode;
    title?: React.ReactNode;
}
