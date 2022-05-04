export const defaultResponse: AgifyResponse = {
    age: 0,
    count: 0,
    name: 'name is missing'
};

export interface AgifyResponse {
    name: string,
    age: number,
    count: number
}
