import fs from "fs";

const data: Record<string, unknown>[] = JSON.parse(fs.readFileSync("../assets/linkedin_extensions.json", "utf-8"));

const filteredList: Record<string, unknown>[] = []
for (const item of data) {
    if (typeof item["description"] !== "string") {
        continue;
    }
    const desc = item["description"].toLowerCase().replace(/\n+/g, " ");
    if (
        desc.includes("email") ||
        desc.includes("sale") ||
        desc.includes("lead") ||
        desc.includes("b2b")
     ) {
        filteredList.push(item);
    }
}

console.log(JSON.stringify(filteredList, null, 2));
