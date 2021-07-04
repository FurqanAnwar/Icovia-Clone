import React from 'react'
import Header from './components/Header/Header';
import Main from 'src/components/Main/Main';
import SecondPage from 'src/components/Pages/SecondPage/SecondPage';
const App = () => {
    return (
        <section className="Section">
            <Header/>
            <Main />
            <SecondPage/>

        </section>
    )
}

export default App
