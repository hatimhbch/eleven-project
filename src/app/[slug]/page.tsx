import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import PageClient from "./PageClient"; // Import the client component
import { Metadata } from "next";

interface Doc {
  body: { code: string };
  readtime?: string;
  date: string;
  title: string;
  description?: string;
  imageurl: string;
  slugAsParams: string;
}

interface PageClientProps {
  doc: Doc;
}

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) {
    notFound();
  }
  return doc;
}

// Use the generateMetadata function to dynamically create the metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params.slug);

  if (!doc) {
    return {
      title: "Not Found",
      description: "The document could not be found.",
    };
  }

  return {
    title: doc.title,
    description: doc.description || "Default description",
    openGraph: {
      title: doc.title,
      description: doc.description,
      images: [{ url: doc.imageurl }]
    }
  };
}

const Page = async ({ params }: PageProps) => {
  const doc = await getDocFromParams(params.slug);
  if (!doc) {
    return <p>Not Found</p>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": doc.title,
    "description": doc.description,
    "image": doc.imageurl
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <PageClient doc={doc} />
    </>
  );
};

export default Page;