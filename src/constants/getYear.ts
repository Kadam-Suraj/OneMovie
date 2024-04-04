export const getYear = (data: any) => {
    let date = new Date(data).getFullYear()
    return date;
}