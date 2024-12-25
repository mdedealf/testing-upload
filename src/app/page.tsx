export default function Home() {
  const Boxes = [
    { id: 1, title: "Box 1" },
    { id: 2, title: "Box 2" },
    { id: 3, title: "Box 3" },
  ];

  return (
    <section className="bg-white h-[calc(100vh-80px)] w-full">
      <div className="flex w-full h-full items-center justify-between px-20">
        {Boxes.map((box) => (
          <div
            key={box.id}
            className="text-center align-middle mx-2 bg-blue-300 w-[400px] h-[300px] rounded-lg"
          >
            {box.title}
          </div>
        ))}
      </div>
    </section>
  );
}
