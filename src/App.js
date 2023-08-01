// import studentData from './data/StudentsData';
import { useState } from 'react';
import './App.css';
// import Students from './components/Students';
// import Styles from './components/Styles'
 
const Student = ({name, bio, scores}) => {
  return (
    <div> 
      <h2 className='title'>Student Info</h2>
      <h3>Name: {name}</h3>
      <h4>Bio: {bio}</h4>
      {/* <h4>Score: {scoreElement.score}</h4>
      <h4>S: {scoreElement.score}</h4> */}
      <h2 className='title'>Score Info:</h2>
      {scores.map((score, index) => (
        <Score key={index} date={score.date} score={score.score} />
      ))}
      
    </div>
  );
};

const Score = ({date, score}) => {
  return (
    <div className='scoreInfo'>
    <h4>Date: {date}</h4>
    <h4>Score: {score}</h4>
    </div>
  )
}

function App() {
  const [studentData, setStudentData] = useState({  
      students: [
        // {studentData}
        {
          name: 'Cait Yomorta',
          bio: 'Born in California, the oldest of 4',
          scores: [
            {
              date: '2018-02-08',
              score: 77
            },
            {
              date: '2018-04-22',
              score: 92
            },
            {
              date: '2018-09-15',
              score: 68
            }
          ]
        },
        {
          name: 'Holly Baird',
          bio: 'Born in Florida, the youngest of 5',
          scores: [
            {
              date: '2018-12-14',
              score: 88
            },
            {
              date: '2019-01-09',
              score: 79
            },
            {
              date: '2019-02-23',
              score: 91
            },
            {
              date: '2019-03-01',
              score: 95
            }
          ]
        },
        {
          name: 'Wes Mungia',
          bio: 'Born in Mishigan. He\'s a only child',
          scores: [
            {
              date: '2018-10-11',
              score: 62
            },
            {
              date: '2018-11-24',
              score: 74
            },
            {
              date: '2018-12-19',
              score: 85
            }
          ]
        }
      ]
    }
    )
    console.log(studentData);

    const studentElement = studentData.students ? (
      studentData.students.map((student) =>
      <div key={student.name} >
         <Student name={student.name} bio={student.bio} scores={student.scores}
        />
      </div>
      )
    ) : (
      <h4>Loading ...</h4>
    );

    // const scoreElement = studentData.students.scores ? (
    //   studentData.students.scores.map((score, index) =>
    //   <div key={index}  className='scoreInfo'>
    //     <Score date={score.date} score={score.score}
        
    //   />
    //   </div>
    // )
    // ) : (
    //   <h4>Loading ...</h4>
    // );

  return (
    <div className="App">
      <h1 className='appname'>Students App</h1>
        <div className='studentInfo'> 
          {studentElement}
        </div>
        {/* <div>
          <h3>Score Info</h3>
          {scoreElement}
        </div> */}
      </div>   
      
      
   
  );
}

export default App;
