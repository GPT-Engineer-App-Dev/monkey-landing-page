import React from 'react';

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <img src="https://placehold.co/1200x600" alt="Monkey Hero" className="w-full h-auto" />
        <h1 className="text-5xl font-bold">Welcome to the World of Monkeys</h1>
        <p className="text-xl text-gray-600">Discover the fascinating lives of our primate cousins</p>
      </header>

      {/* About Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">About Monkeys</h2>
        <p className="text-lg text-gray-600">
          Monkeys are a diverse group of primates that live in various habitats around the world. They are known for their intelligence, social behaviors, and playful nature.
        </p>
        <img src="https://placehold.co/600x400" alt="Monkey in Habitat" className="mx-auto" />
      </section>

      {/* Species Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Different Species of Monkeys</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <img src="https://placehold.co/200x200" alt="Species 1" className="mx-auto" />
            <p className="text-lg font-semibold">Species 1</p>
          </div>
          <div className="space-y-2">
            <img src="https://placehold.co/200x200" alt="Species 2" className="mx-auto" />
            <p className="text-lg font-semibold">Species 2</p>
          </div>
          <div className="space-y-2">
            <img src="https://placehold.co/200x200" alt="Species 3" className="mx-auto" />
            <p className="text-lg font-semibold">Species 3</p>
          </div>
          {/* Add more species as needed */}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Fun Facts About Monkeys</h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Monkeys can understand basic arithmetic and even use tools.</li>
          <li>There are over 260 species of monkeys in the world.</li>
          <li>Some monkeys have prehensile tails that can grasp objects.</li>
          {/* Add more fun facts as needed */}
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="text-center space-y-4">
        <p className="text-lg text-gray-600">© 2023 Monkey World. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;