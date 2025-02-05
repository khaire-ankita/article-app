// function generateStaticParams() {}

export default async function Page({ params }) {
  const { userId } = await params;
  return <h1>Hello, Blog Post Page!:{userId}</h1>;
}
