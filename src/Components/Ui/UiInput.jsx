/* eslint-disable react/prop-types */
import "../../assets/style/ui-styles/InputStyle.scss"
export const UiInput = ({text,placeholder,type,userInput}) => {
  const handleChange = (e)=>{
    userInput(e.target.value)
  }
  return (
    <>
    <div className="inputGroup">
        <p>{text}</p>
        <input type={type} placeholder={placeholder} onChange={handleChange} required/>
    </div>
    </>
  )
}
