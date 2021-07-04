import React from 'react'
// import Section from 'src/components/Pages/SecondPage/Section';
import Container from 'src/components/Pages/SecondPage/Container';
const Main = () => {
    return (
        <main className="Page-Main">
            <section className={`Page-Main__Section Page-Main__Section-Left`}>
                <Container/>
        </section >
        <section className={`Page-Main__Section Page-Main__Section-Right`}>
                <Container side="Right"/>
        </section >
        </main>
    )
}

export default Main
