import { removeNullProperties } from "../utils/object";
import { CmsDocument } from "./types";

export const getCmsDocuments = (data: any) => {
  const docs = data.allMarkdownRemark.edges.map(
    ({ node }: any) => node.frontmatter,
  ) as CmsDocument[];
  return removeNullProperties(docs);
};
