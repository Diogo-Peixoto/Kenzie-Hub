import { FormSearch } from "./style";

function InputSearch({ setSearch }) {
  return (
    <FormSearch>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="button button-primary">Pesquisar</button>
    </FormSearch>
  );
}

export default InputSearch;
