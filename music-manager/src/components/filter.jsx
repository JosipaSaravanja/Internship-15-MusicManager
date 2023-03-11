export const Filter = () => {
  return (
    <div className="filter">
      <input className="unputFilter" placeholder="Pretražite"/>
      <select className="selectFilter">
        <option value="" disabled selected>
          Odaberite žanr
        </option>
        <option value="Pop">Pop</option>
        <option value="Techno">Techno</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Electronic">Electronic</option>
        <option value="Classical">Classical</option>
        <option value="Funk">Funk</option>
        <option value="Rap">Rap</option>
      </select>
      
      <button className="buttonFilter">Filtriraj</button>
    </div>
  );
};
