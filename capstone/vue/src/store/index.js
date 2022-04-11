import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    flashcards: [
        {
        Module: 3,
        Creator: "X",
        Tag: "DOM",
        Question: "What does DOM stand for?",
        Answer: "Document Object Model",
        },
        
        {
        Module: 3,
        Creator: "Y",
        Tag: "DOM",
        Question: 'What type of tools in a web browser are used to inspect a DOM?',
        Answer: 'Developer Tools',
        },
        
        {
        Module: 3,
        Creator: 'Z',
        Tag: 'Vue',
        Question: 'What three programming languages can you use simultaneously in a Vue document?',
        Answer: 'HTML, CSS, and JavaScript',
        },
        
        {
        Module: 3,
        Creator: 'AA',
        Tag: 'VUE',
        Question: 'If a Vue router is not found, which error code is returned?',
        Answer: '404',
        },
        
        {
        Module: 4,
        Creator: 'BB',
        Tag: 'Interview',
        Question: 'True or False: Dirty laundry in the background of a video interview is okay',
        Answer: 'False',
        },
        
        {
        Module: 4,
        Creator: 'CC',
        Tag: 'Interview',
        Question: 'What does the STAR in STAR questions stand for?',
        Answer: 'Situation, Task, Action, Result',
        },
        
        {
        Module: 4,
        Creator: 'DD',
        Tag: 'Interview',
        Question: 'True or False:  When introducing yourself during a technical interview you should tailor your pitch to the more technical audience',
        Answer: 'True',
        },
        
        {
        Module: 4,
        Creator: 'EE',
        Tag: 'Resume',
        Question: 'True or False:  Having your full address on your resume is always helpful',
        Answer: 'false',
        },
        
        {
        Module: 4,
        Creator: 'FF',
        Tag: 'Resume',
        Question: 'True or False:  A brightly colored resume is always the best',
        Answer: 'False',
        },
        
        {
        Module: 4,
        Creator: 'GG',
        Tag: 'LinkedIn',
        Question: 'True or False:  Recruiters don’t use LinkedIn to find potential employees',
        Answer: 'False',
        },
        
        {
        Module: 4,
        Creator: 'HH',
        Tag: 'LinkedIn',
        Question: 'True or False:  Posing with my dog in my LinkedIn profile picture is acceptable',
        Answer: 'False',
        },
        
        {
        Module: 4,
        Creator: 'II',
        Tag: 'LinkedIn',
        Question: 'True or False: LinkedIn will not help you find a job',
        Answer: 'False',
        },
        {
          Module: 1,
          Creator: 'A',
          Tag: 'Java',
          Question: 'What are the three Prinicples of Object Oriented Programming?',
          Answer: 'Polymorphism, Encapsulation, and Inheritance',
        },
          {
          Module: 2,
          Creator: 'B',
          Tag: 'MVC',
          Question: 'What does MVC Stand for?',
          Answer: 'Model, View, Controller',
          },
          {
          Module: 3,
          Creator: 'C',
          Tag: 'HTML',
          Question: 'What does HTML stand for?',
          Answer: 'Hyper Text Markup Language',
          },
          
          {
          Module: 4,
          Creator: "D",
          Tag:"Resume",
          Question: "How long, ideally, should your resume be?",
          Answer: "1 Page",
          },
          {
          Module: 1,
          Creator:"E",
          Tag: 'Git',
          Question: "What is version control?",
          Answer: "Version control is software used to help keep track of changes over time to a codebase",
          },
          
          {
          Module: 1,
          Creator:"F",
          Tag: "Git",
          Question: 'What two steps must you take in Git before pushing your work?',
          Answer: 'Add and Commit',
          },
          
          {
          Module: 1,
          Creator: 'G',
          Tag: 'Java',
          Question: 'In a Map, a value is paired with what?',
          Answer: 'A Key',
          },
          
          {
          Module: 1,
          Creator: 'H',
          Tag: 'Java',
          Question: 'What is Polymorphism?',
          Answer: 'The ability of different objects to respond in a unique way to the same message',
        },
          
          {
          Module: 1,
          Creator: 'I',
          Tag: 'Java',
          Question: 'What command is used to end the iteration of a loop?',
          Answer: 'Break',
          },
          
          {
          Module: 1,
          Creator: 'J',
          Tag: 'Java',
          Question: 'What expression deals with True and False?',
          Answer: 'Boolean',
          },
          
          {
          Module: 2,
          Creator: 'K',
          Tag: 'SQL',
          Question: 'What does SQL stand for?',
          Answer: 'Structured Query Language',
          },
          
          
          {
          Module: 2,
          Creator: 'L',
          Tag: 'SQL',
          Question: 'If I wanted to select all rows in a table, what symbol would I use?',
          Answer: '*',
          },
          
          {
          Module: 2,
          Creator: 'M',
          Tag: 'SQL',
          Question: 'What term would you use to connect two separate tables?',
          Answer: 'Join',
          },
          
          {
          Module: 2,
          Creator: 'N',
          Tag: 'HTTP',
          Question: 'What is the difference between HTTP and HTTPS?',
          Answer: 'HTTPS is secured/encrypted',
          },
          
          {
          Module: 2,
          Creator: 'O',
          Tag: 'HTTP',
          Question: '.com, .org, and .gov are examples of what URL part?',
          Answer: 'Top Level Domain',
          },
          {
          Module: 2,
          Creator: 'P',
          Tag: 'API',
          Question: 'What does API stand for?',
          Answer: 'Application Programming Interface',
          },
          
          {
          Module: 2,
          Creator: 'Q',
          Tag: 'API',
          Question: 'What does JSON stand for?',
          Answer: 'JavaScript Object Notation',
          },
          
          {
          Module: 2,
          Creator: 'R',
          Tag: 'API',
          Question: 'What term is used to send an update request to an API?',
          Answer: 'PUT',
          },
          
          {
          Module: 3,
          Creator: 'S',
          Tag: 'CSS' ,
          Question:  'True or False: An ID assigned to more than one element in CSS',
          Answer: 'False',
          },
          
          {
          Module: 3,
          Creator: 'T',
          Tag: 'CSS',
          Question: 'px is an example of what kind of length unit?',
          Answer: 'Absolute',
          },
          
          {
          Module: 3,
          Creator: 'U',
          Tag: 'CSS',
          Question: 'What is Resonsive Web Design?',
          Answer: 'Responsive web design is a set of practices that allows pages to alter their layout and appearance to suit different screen sizes and resolutions',
          },
          
          {
          Module: 3,
          Creator: 'V',
          Tag: 'JavaScript',
          Question: 'What does NaN stand for?',
          Answer: 'Not a Number',
          },
          {
          Module: 3,
          Creator: 'W',
          Tag: 'JavaScript',
          Question: 'What is the boolean value of “!null”',
          Answer: 'True',
          },
        ],
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    }
  }
})