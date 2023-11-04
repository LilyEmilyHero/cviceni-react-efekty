/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce setTimeout po 3 vteřinách
  v konzoli vypíše text „Jsem tady“.
*/
import { useEffect } from 'react';

export const Ukol3 = () => {
  useEffect(() => {
    setTimeout(() => console.log('Jdu pozdě, ale jsem tu! Úkol 3'), 3000);
  }, []);

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
