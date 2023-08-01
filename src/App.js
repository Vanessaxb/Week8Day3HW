// import studentData from './data/StudentsData';
import { useState } from 'react';
import './App.css';
import Score from './components/Score';
import Students from './components/Students';


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
         <Students name={student.name} bio={student.bio} scores={student.scores}
        />
      </div>
      )
    ) : (
      <h4>Loading ...</h4>
    );
       
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