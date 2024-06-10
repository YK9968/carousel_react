export default function SearchBar({ search }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const value = form.elements.search.value;
    search(value);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button>Search GitHub</button>
      </form>
    </div>
  );
}
