import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Harvest from "./components/Harvest";
import Cook from "./components/Cook";
import Regulations from "./components/Regulations";
import Info from "./components/Info";
import General from "./components/General";
// import FAQS from "./components/FAQS";
import { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [topic, setTopic] = useState("");
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/get").then((response) => {
            setList(response.data);
        });
    }, []);

    const submitTopic = () => {
        Axios.post("http://localhost:8000/api/insert", {
            topic: topic,
            question: text,
        });

        setList([...list, { topic: topic, questions: text }]);
    };

    return (
        <div className="App">
            {/* <Navbar /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="harvest" element={<Harvest />} />
                        <Route path="cook" element={<Cook />} />
                        <Route path="regulations" element={<Regulations />} />
                        <Route
                            path="info"
                            element={
                                <Info submitTopic={submitTopic} list={list} />
                            }
                        />
                        {/* <Route
                            path="faqs"
                            element={
                                <FAQS
                                    topic={topic}
                                    setTopic={setTopic}
                                    text={text}
                                    setText={setText}
                                    submitTopic={submitTopic}
                                    list={list}
                                />
                            }
                        /> */}
                        <Route
                            path="general"
                            element={
                                <General
                                    submitTopic={submitTopic}
                                    list={list}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
