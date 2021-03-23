import { removeNullProperties } from "../utils/object";
import { CmsDocument } from "./types";

export const getCmsDocuments = (data: any) => {
  const docs = data.allMarkdownRemark.edges.map(({ node }: any) => {
    console.log(node);
    return {
      ...node.frontmatter,
      layout: node.fields.filePath,
    };
  }) as CmsDocument[];
  return removeNullProperties(docs);
};
