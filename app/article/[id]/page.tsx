type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Post ID: {id}</h1>
    </main>
  );
}
