export interface Bicycle {
    id: number,
    name: string,
    images: any[],
    parts: any[]
}

export const bicycles: any = [
{
    id: "1",
    name: "Bicycle A",
    images: ["/assets/yourBike1.png"],
    parts: [{id: 1}]
},
{
    id: "2",
    name: "Bicycle B",
    images: ["/assets/yourBike2.png"],
    parts: [{id: 2}]
}]