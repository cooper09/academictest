module.exports = {
  // Load Mock Product Data Into localStorage
  /* The three data sources are 
      1) Teachers
      2) Students
      3) Quizzes

    Since these are seperate classes it allows all kinds of relationships, single-to-single, single-to-many
      many-to-many. 

    Normally this data would come from an API, but since this is only a demo, we'll use static 
    local storage for convenience and speed.
  */
  init: function () {
    console.log("AppData init");
    localStorage.clear();

    localStorage.setItem('teachers', JSON.stringify([
      {
        id: 'Teacher One',
        subject: 'History',
        quizzes: [
          {'quiz1': '0'},
          {'quiz2': '0'},
          {'quiz3': '0'},
          {'quiz4': '0'} 
        ] 
      },
      {
        id: 'Teacher Two',
        subject: 'Math',
        quizzes: [
          {'quiz1': '0'},
          {'quiz2': '0'},
          {'quiz3': '0'},
          {'quiz4': '0'} 
        ] 
      },
      {
        id: 'Teacher Three',
        subject: 'Science',
        quizzes: [
          {'quiz1': '0'},
          {'quiz2': '0'},
          {'quiz3': '0'},
          {'quiz4': '0'} 
        ] 
      }
    ]));//end setItem(teachers)

    localStorage.setItem('students', JSON.stringify([
        {
          name: 'Student One',
          subjects: [
              {'Math': [
                    {
                        'quiz1': 0,
                    },
                    {
                        'quiz2': 0,
                    },
                    {
                        'quiz3': 0,
                    },
                    {
                        'quiz4': 0,
                    }
                ]//end subjects array
            },
            {'History': [
                {
                  'quiz1': 0,
                },
                {
                  'quiz2': 0,
                },
                {
                  'quiz3': 0,
                },
                {
                  'quiz4': 0,
                }
              ]//end history array
          },
          {'Science': [
            {
              'quiz1': 0,
            },
            {
              'quiz2': 0,
            },
            {
              'quiz3': 0,
            },
            {
              'quiz4': 0,
            }
          ]//end subjects array
        }//end science quizzes
    ]}]));//end setItem(students)

      localStorage.setItem('quizzes', JSON.stringify([
        {
          subject: 'Math',
          question1: 'What has four legs and flys',
          answers: [
              {
                  correct: "two pair of pants",
                  wrong: [
                      "two pair of shoes",
                      "the Roman Empire",
                      "Willy Stargell"
                  ]
              }
          ]
        }
        
      ]));//end setItem(quizzes)
  } //end init
}; //end export