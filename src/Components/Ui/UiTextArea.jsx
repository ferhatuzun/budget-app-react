/* eslint-disable react/prop-types */
export const UiTextArea = ({text,placeholder,userTextArea}) => {

  const handleChange = (e)=>{
    userTextArea(e.target.value)
  }
  return (
    <>
    <div className="inputGroup">
        <p>{text}</p>
        <textarea rows={5} placeholder={placeholder} onChange={handleChange} required/>
    </div>
    </>
  )
}
