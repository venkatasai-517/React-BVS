import bg from "../assets/img/bg.png";
const About = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="container pt-4">
          <h5 className="text-center">
            <b>About</b>
          </h5>
          <p>
            <li className="nav">
              1. Select the set of paragraphs that will become the list, or
              click to place the insertion point where you want the list to
              begin. Do any of the following: Click the Bulleted List button or
              the Numbered List button in the Control panel (in Paragraph mode).
            </li>
            <li className="nav">
              2. Hold down Alt(Windows) or Option (Mac OS) while clicking a
              button to display the Bullets And Numbering dialog box. Choose
              Bullets And Numbering from the Paragraph panel or Command panel.{" "}
            </li>
            <li className="nav">
              3. For List Type, choose either Bullets or Numbers. Specify the
              settings you want, and then click OK. Apply a paragraph style that
              includes bullets or numbering. To continue the list in the next
              paragraph, move the insertion point to the end of the list and
              press Enter or Return.
            </li>
            <li className="nav">
              {" "}
              4. To end the list (or list segment, if the list is to be
              continued later in the story), click the Bulleted List or Numbered
              List button in the Control panel again, or choose Bullets And
              Numbering from the Paragraph panel menu.
            </li>
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default About;
