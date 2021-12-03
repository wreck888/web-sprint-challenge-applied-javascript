import { throwStatement } from "@babel/types";
import axios from "axios";
import { topics } from "../mocks/data";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

  for (let i = 0; i < topics.length; i++) {
    const newTopic = document.createElement('div');
    newTopic.classList.add('tab')
    newTopic.textContent = topics[i];
    topicsDiv.appendChild(newTopic)
  }


  // const topicsDiv = document.createElement('div');
  // const javaDiv = document.createElement('div');
  // const bootDiv = document.createElement('div');
  // const techDiv = document.createElement('div');

  // topicsDiv.appendChild(javaDiv);
  // topicsDiv.appendChild(bootDiv);
  // topicsDiv.appendChild(techDiv);
  
  // topicsDiv.classList.add('topics');
  // javaDiv.classList.add('tab');
  // bootDiv.classList.add('tab');
  // techDiv.classList.add('tab');

  // topicsDiv.textContent = topics;
  // javaDiv.textContent = 'javascript';
  // bootDiv.textContent = 'bootstrap';
  // techDiv.textContent = 'technology';

  return topicsDiv
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  

  
  axios.get(`http://localhost:5000/api/topics`) 
    .then(resp =>{
    
    
        document.querySelector(selector).appendChild(Tabs(topics.topics))
    
      // resp.data.topics.forEach(topics => {
      //   document.querySelector(selector).appendChild(Tabs(topics))
      
      // })
      //   for(let i = 0; i < resp.length; i++ ) {
    //     Tabs(topics[i])
    //     document.querySelector(selector).appendChild(resp.data.topics[i])
    //   }
    //  })
    
    })

}
export { Tabs, tabsAppender }
