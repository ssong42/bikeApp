interface Part {
    id: number,
    name: string,
    images: any[],
    description: string,
    compatibleBikes: any[]
}

export const parts: Part[] = [
    {
        id: 1,
        name: "Part A",
        images: [{path: "/assets/AkrapovicExhaust.svg"}, {path: "/assets/AkrapovicExhaust.svg"}],
        description: "A seatpost wedge compatible with the 2019 S3 Rim and Disc models.",
        compatibleBikes: [{id: 1, name: "Bicycle A"}]
    },
    {
        id: 2,
        name: "Part B",
        images: [{path:"/assets/SupraSuspensionImage.svg"}, {path:"/assets/SupraSuspensionImage.svg"}],
        description: `As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than 'average') and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that's sure to stand up to years of hard riding.
        6062 premium butted aluminum, high-strength design. 
        Short reach for optimal brake/shift control.
        Shallow Bend Drop: 125mm drop x 65mm reach`, 
        compatibleBikes: [{id: 2, name: "Bicycle B"}],
    }]