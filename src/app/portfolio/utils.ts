import fs from "fs";
import path from "path";

interface Metadata {
  featured?: boolean | string;
  project: string;
  image: string;
  name: string;
  description: string;
  tags: string;
  authorsPicture: string;
  author: string;
  publishedAt: string;
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const metadata: Partial<Metadata> = {};

  if (match == null) return { metadata: {}, content: fileContent };

  const frontmatterBlock = match[1];
  const frontmatterLines = frontmatterBlock.trim().split("\n");
  const content = fileContent.replace(frontmatterRegex, "").trim();

  frontmatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir, {
      recursive: true,
    })
    .filter(
      (file) => path.extname(file.toString()) === ".md" || path.extname(file.toString()) === ".mdx",
    );
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file.toString()));
    const slug = path.basename(file.toString(), path.extname(file.toString()));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "portfolio", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
