/* eslint-disable react/prop-types */
export const UiSelect = ({ text, userSelect, data }) => {
  const handleChange = (e) => {
    userSelect(e.target.value);
  };
  return (
    <div className="inputGroup">
      <p>{text}</p>
      <select onChange={handleChange} required>
        <option value="">Seçim Yap</option>
        {data
          ? data.map((data, index) => {
              if (data.cardName) {
                return <option key={index}>{data.cardName}</option>;
              } else if (data.personName) {
                return <option key={index}>{data.personName}</option>;
              } else if (data.categoryName) {
                return <option key={index}>{data.categoryName}</option>;
              }
            })
          : ""}
      </select>
    </div>
  );
};
