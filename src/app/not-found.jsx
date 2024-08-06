
import React from 'react';
import Button from './components/Button';
import Link from 'next/link';

export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className=" text-9xl font-bold mb-4 text-primary">404</h2>
      <p className="text-lg mb-6">La page que vous recherchez n'existe pas.</p>
       <Link href="/"> <Button text="retourner à la page d'accueil"></Button> </Link> 
    </div>
  );
}
