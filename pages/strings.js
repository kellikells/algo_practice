import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import QuestionCard from '../components/cards/QuestionCard';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';

import { stringData } from '../data/index';


const strings = () => {
    const [questionNum, setQuestionNum] = useState(0);

    function nextButton() {
        setQuestionNum(questionNum + 1)
    }

    function previousButton() {
        setQuestionNum(questionNum - 1)
    }

    return (

        <div className='fontRoboto h-5/6 flex justify-between flex-col
         '>
       
            <div>
                            
    
                <div className='mx-auto'>
                    <QuestionCard
                        title={stringData[questionNum].title}
                        functionName={stringData[questionNum].functionName}
                        question={stringData[questionNum].question}
                        answer={stringData[questionNum].answer}
                    />
                </div>
            </div>

            <div>
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
                                {questionNum <= stringData.length-1
                                    ? false
                                    : true
                                }
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default strings;
