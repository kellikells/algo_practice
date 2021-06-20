import React, { useState, useEffect } from 'react';


import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';
import FooterButtons from '../components/buttons/FooterButtons';

import { arrayData } from '../data/index';

const arrays = () => {
    const [questionNum, setQuestionNum] = useState(0);
    function nextButton() {
        setQuestionNum(questionNum + 1)
    }
    function previousButton() {
        setQuestionNum(questionNum - 1)
    }
    return (
        <div className='fontRoboto w-full flex flex-col h-screen mx-auto'>
            {/* // <div className='min-h-screen container mx-auto fontRoboto  flex flex-col justify-between'> */}
            {/* // <div className='min-h-screen container mx-auto fontRoboto  flex flex-col justify-between'> */}
            <div className='flex-grow'>
                <QuestionCard
                    title={arrayData[questionNum].title}
                    functionName={arrayData[questionNum].functionName}
                    question={arrayData[questionNum].question}
                    answer={arrayData[questionNum].answer}
                />
            </div >
            {/* <Footer />
                </div> */}

            <footer className='container relative mx-auto'>
                <div className='  px-4'>
                    <div className='flex justify-between'>
                        <div className='w-1/5 md:w-32'>

                            <PreviousButton
                                handleClick={previousButton}
                                disabled=
                                {questionNum >= 1
                                    ? false
                                    : true
                                }
                            />

                        </div>
                        <div className='w-1/5 md:w-32'>

                            <NextButton
                                handleClick={nextButton}
                                disabled=
                                {questionNum <= arrayData.length - 1
                                    ? false
                                    : true
                                }
                            />

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default arrays;
