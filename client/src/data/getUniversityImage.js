
const imageModules = import.meta.glob(
    "/src/assets/universities-images/*",
    { eager: true, import: "default" }
);


function normalize(str = "") {
    return str
        .toLowerCase()
        .replace(/\.[^/.]+$/, "") 
        .replace(/[^a-z0-9]/g, "");
}


const imagesByNormalizedName = {};
for (const path in imageModules) {
    const filename = path.split("/").pop();
    imagesByNormalizedName[normalize(filename)] = imageModules[path];
}

const filenameKeys = Object.keys(imagesByNormalizedName);


export function getUniversityImage(uni) {
    if (uni.image) {
        const overrideKey = normalize(uni.image);
        const exact = imagesByNormalizedName[overrideKey];
        if (exact) return exact;

        const fuzzyOverride = filenameKeys.find((key) => key.includes(overrideKey));
        if (fuzzyOverride) return imagesByNormalizedName[fuzzyOverride];
    }

    const nameKey = normalize(uni.name);
    if (imagesByNormalizedName[nameKey]) return imagesByNormalizedName[nameKey];

    const fuzzyMatch = filenameKeys.find(
        (key) => key.includes(nameKey) || nameKey.includes(key)
    );
    return fuzzyMatch ? imagesByNormalizedName[fuzzyMatch] : null;
}

