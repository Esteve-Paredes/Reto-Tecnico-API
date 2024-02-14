import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";

export function readFile(path: string | undefined) {
  if (path) {
    const fileContent = readFileSync(path, "utf-8");
    const csvContent = parse(fileContent, {
      columns: true,
      cast: (value, context) => {
        if (context.column === "Age") return Number(value);
        return value;
      },
    });
    return csvContent;
  }
}
