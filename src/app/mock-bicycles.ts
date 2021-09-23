export interface Bicycle {
    _id: string,
    id: string,
    name: string,
    images: any[string],
    parts: any[]
}

export const bicycles: any = [
{
    _id: "1",
    id: "1",
    name: "Bicycle A",
    images: ["/assets/yourBike1.png"],
    parts: [{_id: "1"}]
},
{
    _id: "2",
    id: "2",
    name: "Bicycle B",
    images: ["/assets/yourBike2.png"],
    parts: [{_id: "2"}]
}]