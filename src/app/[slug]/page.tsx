import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import PageClient from "./PageClient"; // Import the client component
import { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";

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
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: `https://elevenai.co/${doc.slug}`,
      images: [
        {
          url: doc.imageurl,
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: doc.imageurl,
    },
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
    "datePublished": doc.date,
    "author": {
      "@type": "Person",
      "name": "Hatim",
    },
    "publisher": {
      "@type": "Organisation",
      "name": "elevenai",
      "logo": {
        "@type": "ImageObject",
        "url": "../../logo.png"
      }
    },
    "description": doc.description,
    "image": doc.imageurl,
  };

  return (
    <>
      <Head>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
</Head>
      <PageClient doc={doc} />
    </>
  );
};

export default Page;