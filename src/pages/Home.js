import React, { useEffect ,useState} from 'react';
import profile from '../images/profile.jpeg';
import { Chart } from 'react-google-charts';
import backl from '../images/4853433.jpg';
import llogo from '../images/LeetCodeLogo.png';
const Home = () => {

  const [totalSolvedQuestions, setTotalSolvedQuestions] = useState(0);
  const [hardQues, setHardQues] = useState(0);
  const [mediumQues, setMediumQues] = useState(0);
  const [easyQues, setEasyQues] = useState(0);

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [thardQues, settHardQues] = useState(0);
  const [tmediumQues, settMediumQues] = useState(0);
  const [teasyQues, settEasyQues] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Krati_Goyal');
        const data = await response.json();

        setTotalSolvedQuestions(data.totalSolved);
        setHardQues(data.hardSolved);
        setMediumQues(data.mediumSolved);
        setEasyQues(data.easySolved);

        setTotalQuestions(data.totalQuestions)
        settHardQues(data.totalHard)
        settMediumQues(data.totalMedium)
        settEasyQues(data.totalEasy)

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
 

  const getChartData = () => 
  {
    return [
      ['Contry', 'Mhl'],
      ['Hard', hardQues],
      ['Medium', mediumQues],
      ['Easy', easyQues],
    ];
  };
  
  return (
    <div>
      <section className="content" id="home">
        <div className="container center-content">
          <h3>Hi👋, I'm&nbsp;
            <b id="full-name-text">Krati Goyal</b>
          </h3>
          <img className="profile_pic" src={profile} alt="User" />
          <h3 id="home-into-text">
            I am into Full Stack Development
            <span className="txt-rotate" data-period="3000"
              data-rotate='["JAVA Development","FrontEnd Development","WEB Development","UI/UX","Mentoring"]'></span>
          </h3>
          <div className="main">
            <a href="https://github.com/iamkrati" target="_blank"> <i className=" fa-brands fa-3x fa-github"></i></a>
            <a href="https://www.linkedin.com/in/krati-goyal-910a39212/" target="_blank">
              <i className="fab fa-3x fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/krati_goyal/" target="_blank">
              <i className="fa-3x fa-brands fa-instagram"></i>
            </a>
            <a href="https://linktr.ee/krati_glaian" target="_blank">
              <i className="fa-solid fa-3x fa-circle-info"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="leetcode" style={{ background: `url(${backl})` }}>
        <div className="container content-div">
          <div className="row section-title">
            <p className="title-text">
              <img src={llogo} /> LeetCode
            </p>
          </div>
          <div className="total" >
            <div id="myChart" style={{ margin: 'auto', height: '150px' }}>
              <Chart
                width={'500px'}
                height={'280px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={getChartData()}
                rootProps={{ 'data-testid': '1' }}
                options={{'backgroundColor':'transparent'}}
              />
            </div>
            <br /><br />
            <div className="stats">
              <div className="column1 column">
                <p>ALL</p>
                <span id="all">
                  {totalSolvedQuestions}
                </span> /
                <span id="allques">
                  {totalQuestions}
                </span>
              </div>
              <div className="column">
                <p>HARD</p>
                <span id="hard">
                  {hardQues}
                </span> /
                <span id="hardques">
                  {thardQues}
                </span>
              </div>
              <div className="column">
                <p>MEDIUM</p>
                <span id="medium">
                  {mediumQues}
                </span> /
                <span id="mediumques">
                  {tmediumQues}
                </span>
              </div>
              <div className="column">
                <p>EASY</p>
                <span id="easy">
                  {easyQues}
                </span> /
                <span id="easyques">
                  {teasyQues}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home