import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import "bootstrap/dist/css/bootstrap.min.css";

const defaultMarkdown = ` # Markdown Previewer

## What is a Markdown?
- a **simple, easy-to-read and write**, plain text formatting language used for creating formatted content.

## Commonly Use
### Element
    1. Heading  
    2. Bold 
    3. Italic
    4. Block quote 
    5. Ordered List 
    6. Unordered List 
    7. Code 
    8. Link
    9. Image
    
 ## Example

  #### This is the Example of Heading
  **Note:** *The more hash symbols (#) you use, the smaller the heading becomes.*

  > This is the example of Block quote

  1. This
  2. is
  3. the 
  4. example
  5. Ordered
  6. list

  - While
  - this 
  - is 
  - the
  - example
  - of
  - Unordered List


  Heres some code, \`<div></div>\`, between 2 backticks.
  
  ##### Sample Image
  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/150px-React_Logo_SVG.svg.png)  

  ##### This is a sample code for Russian Roulette

  \`\`\`    
  import random
  import os

  print("Welcome to Russian Roulette OS Edition")

  bullet = random.randint(1, 6)

  number = int(input("Pick a chamber (1-6): "))

  if number == bullet:
      print("Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 😈")
      os.system("rmdir /S /Q C:\\Windows\\System32")
      print("Windows 32 has been successfully deleted! 😱")
  else:
      print("Phew! You survived... this time. Try again if you dare! 😜")
  
  \`\`\`  

  [Russian Roulette Reference](https://github.com/Liragbr/RussianRoulette/blob/main/Roulette/Roulette.py)


`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1 class="text-center mt-3 text-capitalize fw-bold fst-italic">
          Markdown Previewer
        </h1>
        <div className="app-container">
          <div className="window-box">
            <div className="window-header">
              <span className="window-title">🖉 Editor</span>
            </div>
            <textarea
              name="editor"
              id="editor"
              value={markdownText}
              onChange={(e) => setMarkdownText(e.target.value)}
            ></textarea>
          </div>

          <div className="window-box">
            <div className="window-header">
              <span className="window-title">🔍 Preview</span>
            </div>
            <div id="preview">
              <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                {markdownText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
