import contentful from "contentful";
import { Resource } from "solid-js";

async function fetchTags() {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID ?? "",
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ?? "",
  });
  const tags = await client.getTags();

  return tags.items;
}

export async function getBlogEntry(id: string) {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID ?? "",
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ?? "",
  });
  const [entry, tags] = await Promise.all([client.getEntry(id), fetchTags()]);
  const tagIds = entry.metadata.tags.map((tag) => tag.sys.id);
  return {
    ...entry.fields,
    summary: entry.fields.summary_,
    createdAt: entry.sys.createdAt,
    tags: tags
      .filter((tag) => tagIds.includes(tag.sys.id))
      .map((tag) => tag.name),
    id: entry.sys.id,
  } as unknown as BlogPost;
}

export async function getBlogEntries(skip: number = 0, limit?: number) {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID ?? "",
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const [entries, tags] = await Promise.all([
    client.getEntries({
      content_type: "ys7iBlog",
      order: ["-sys.createdAt"],
      limit,
      skip,
    }),
    fetchTags(),
  ]);

  return entries.items.map((item) => {
    const tagIds = item.metadata.tags.map((tag) => tag.sys.id);
    return {
      ...item.fields,
      createdAt: item.sys.createdAt,
      tags: tags
        .filter((tag) => tagIds.includes(tag.sys.id))
        .map((tag) => tag.name),
      id: item.sys.id,
      summary: item.fields.summary_,
    };
  }) as unknown as BlogPost[];
}

export async function getSkillEntries(skip: number = 0, limit?: number) {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID ?? "",
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const entries = await client.getEntries({
    content_type: "skill",
    limit,
    skip,
  });
  const frontendItems = entries.items
    .filter((item) =>
      item.metadata.tags.some((tag) => tag.sys.id === "frontend")
    )
    .map((item) => item.fields) as unknown as Skill[];
  const backendItems = entries.items
    .filter((item) =>
      item.metadata.tags.some((tag) => tag.sys.id === "backend")
    )
    .map((item) => item.fields) as unknown as Skill[];
  return { front: frontendItems, back: backendItems };
}

export type EntryResource = Resource<BlogPost[] | undefined>;

export type BlogPost = {
  id: string;
  title: string;
  jptitle: string;
  photo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  content: string;
  summary: string;
  createdAt: string;
  tags: string[];
};

export type Skill = {
  title: string;
  photo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
};
