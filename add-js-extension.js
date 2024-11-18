import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";
import { join, extname } from "path";

function addJsExtension(dir) {
    readdirSync(dir).forEach((file) => {
        const fullPath = join(dir, file);
        if (fullPath.includes("node_modules")) {
            return; // Skip node_modules directory
        }
        if (lstatSync(fullPath).isDirectory()) {
            addJsExtension(fullPath);
        } else if (extname(fullPath) === ".js") {
            let content = readFileSync(fullPath, "utf8");
            content = content.replace(
                /(import .* from ['"])(.*)(['"])/g,
                "$1$2.js$3"
            );
            writeFileSync(fullPath, content, "utf8");
        }
    });
}

addJsExtension(join(process.cwd(), "dist"));
