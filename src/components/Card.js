const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

export default function Card(props){
  const{titleText1, titleText2, titleText3, titleText4, descText1, descText2, descText3, descText4} = props;
  return <div className = "card">
    <h2 className="cardTitle">{titleText1}</h2>
    <p className="cardDescription">{descText1}</p>
    <h2 className="cardTitle">{titleText2}</h2>
    <p className="cardDescription">{descText2}</p>
    <h2 className="cardTitle">{titleText3}</h2>
    <p className="cardDescription">{descText3}</p>
    <h2 className="cardTitle">{titleText4}</h2>
    <p className="cardDescription">{descText4}</p>
  <br /> <br />
  <p className="cardFooter">{"Date: " + dateName + "/"+ monthName + "/"+ currentYear}</p>
  </div>
}
