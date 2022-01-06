import "./styles.css";
import Button from "./components/ui/Button";
import { useCallback, useState } from "react";
import FormField from "./components/ui/FormField";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import formatPokemon from "./formatters/formatPokemon";

const initialValues = {
  pokemonName: ""
};
const validationSchema = yup.object().shape({
  pokemonName: yup.string().required().label("Pokemon name")
});

const App = () => {
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const handleFormSubmit = useCallback(
    async ({ pokemonName }, { setFieldError }) => {
      setError("");

      try {
        const { data } = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemon(formatPokemon(data));
      } catch (err) {
        console.error(err);

        if (err?.response?.status === 404) {
          setFieldError("pokemonName", "No such pokemon.");

          return true;
        }

        setError("Oops, something went wrong. Try again :/");

        return true;
      }

      return true;
    },
    []
  );

  return (
    <div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid, isSubmitting, errors }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <FormField
              name="pokemonName"
              type="search"
              placeholder="Search for a pokemon!"
            >
              Pokemon name
            </FormField>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              SEARCH
            </Button>
          </form>
        )}
      </Formik>
      {error ? <p className="text-red-500 my-4 px-4">{error}</p> : null}
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">RESULT</h2>
        {pokemon ? <Pokemon {...pokemon} /> : null}
      </div>
    </div>
  );
};

export default App;
