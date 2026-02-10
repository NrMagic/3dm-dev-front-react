import TextButton from "./components/TextButton";
import Header from "./components/header";
//esse export é direcionado somente a essa function
export default function App(params) {
  return(
    <>
    <h1>React.Component</h1>
    <TextButton label='test'/>
    <Header/>
    </>
  )
}