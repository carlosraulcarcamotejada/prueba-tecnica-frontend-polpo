import { FC, useState } from "react";
import {
  Button,
  Container,
  Footer,
  Header,
  Joke,
  Listbox,
  Main,
} from "./components";
import { useFetchJokes } from "./hooks/useFetchJokes";

const App: FC = (): JSX.Element => {
  //maneja el estado de la cateforía seleccionada
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  //useFetchJokes se encarga de centralizar la lógica de las peticiones
  const { joke, getNewJoke, isLoading } = useFetchJokes(selectedCategory);



  return (
    <>
      {/* Main Component, encargado de servir de contendor de toda la App */}
      <Main>
        {/* Header Component, encargado de mostrar el título de la App */}
        <Header title="Chuck Norris Jokes" />

        {/* Container Component, encargado de encapsular otros componentes */}
        <Container>
          {/* Listbox Component, encargado de mostrar y seleccionar las categorias */}
          <Listbox
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            title="Select a category"
          />
          {/* Listbox Component, encargado de generar la siguiente ramdon joke */}
          <Button
            disabled={selectedCategory.length === 0 || isLoading}
            label="New random joke"
            onClick={getNewJoke}
          />
          {/* 
          Cuando "isLoading" is true se encarga de mostrar un Spinner component. 
          cuando deja cargar y "isLoading" se vuelve false muestra la joke. 
          */}

          <Joke joke={joke?.value || ""} isLoading={isLoading} />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default App;
