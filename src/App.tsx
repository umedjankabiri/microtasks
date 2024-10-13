import './App.css'
import {StudentProps} from "common/types/nested/StudentProps.ts";
import {useState} from "react";
import {Header} from "common/components/Header/Header.tsx";
import {Body} from "common/components/Body/Body.tsx";
import {Footer} from "common/components/Footer/Footer.tsx";
import {DemonstrateMapMethod} from "common/components/DemonstrateMapMethod/DemonstrateMapMethod.tsx";
import {Button} from "common/components/Button/Button.tsx";
import {DemonstrateUseState} from "common/components/DemonstrateUseState/DemonstrateUseState.tsx";
import {Filter} from "common/components/Filter/Filter.tsx";
import {FullInput} from "common/components/FullInput/FullInput.tsx";
import {Input} from "common/components/Input/Input.tsx";

function App() {
    /* nested-component */
    const students: StudentProps[] = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    /* button component */
    const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I am Vasiliy")
    }
    const mySecondSubscriber = () => {
        console.log("Hello I am Ivan")
    }
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log("100200")
    }
    const foo2 = (num: number) => {
        console.log(num)
    }
    const ButtonFoo1 = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const ButtonFoo3 = () => {
        console.log("I am stupid button")
    }

    /* FullInput component */
    const [message, setMessage] = useState([
        {message: "Hello I am Ivan"},
        {message: "Hello I am Vasiliy"},
        {message: "Hello I am John"}
    ])
    const addMessage = (value: string) => {
        const newMessage = {message: value}
        setMessage([newMessage, ...message])
    }
    const messages = message.map((item, index) => {
        return (
            <li key={index}>
                <span>
                    {item.message}
                </span>
            </li>
        )
    })

    /* Input component */
    const [value, setValue] = useState("");
    const onClickButtonHandler = () => {
        addMessage(value)
        setValue('')
    }

  return (
      <div>
        <div><h1>Microtasks</h1></div>
          {/* nested-component */}
          <div style={{fontSize: "24px"}}>Nested component</div><br/><br/>
          <Header title={"Header from props"}/>
          <Body title={"Body from props"}/>
          <Footer title={"Footer from props"}/>
          <DemonstrateMapMethod students={students}/>

          {/* button component */}
          <div>Button component</div>
          <div>
              <div style={{fontSize: "24px"}}>Button component</div>
              <br/><br/>
              <button onClick={(event) => {
                  console.log("Hello")
              }
              }>My YouTube Channel 1
              </button>
              <button onClick={myFirstSubscriber}>My YouTube Channel 2</button>
              <button onClick={mySecondSubscriber}>My YouTube Channel 3</button>
              <button onClick={(event) => onClickHandler("Vasiliy")}>My YouTube Channel 4</button>
              <button onClick={(event) => onClickHandler("Ivan")}>My YouTube Channel 5</button>
          </div>
          <div>
              <button onClick={foo1}>1</button>
              <button onClick={(event) => foo2(100200)}>2</button>
          </div>
          <div>
              <Button onClick={() => ButtonFoo1("I am Vasiliy", 37, "I am living in Istanbul")}>My YouTube Channel 1</Button>
              <Button onClick={() => ButtonFoo2("I am Ivan")}>My YouTube Channel 2</Button>
              <Button onClick={ButtonFoo3}>Stupid Button</Button>
          </div>
          <div>
              <DemonstrateUseState/>
          </div>
          <div style={{marginLeft: '300px'}}>
              <Filter/>
          </div>

          {/* FullInput component */}
          <div>
              <div>FullInput component</div>
              <FullInput onChange={addMessage}/>
          </div>

          {/* Input component */}
          <div>
              <div>Input component</div>
              <Input value={value} onChange={(event: string)=> setValue(event)}/>
              <Button onClick={onClickButtonHandler}>+</Button>
              <ul>
                  {messages}
              </ul>
          </div>
      </div>
  )
}

export default App
